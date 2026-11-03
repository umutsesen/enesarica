import { createHash } from 'node:crypto';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { extname, join, relative } from 'node:path';

// A regression guard for the editorial policy, not a legal or medical approval.
const root = process.cwd();
const rendered = process.argv.includes('--rendered');
const textTypes = new Set(['.js', '.jsx', '.ts', '.tsx', '.mdx', '.md', '.json', '.txt', '.xml', '.svg', '.webmanifest', '.css', '.html']);
const mediaTypes = new Set(['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif', '.ico', '.svg', '.mp4', '.webm', '.pdf']);
const rules = [
  ['restricted terminology', /tedavi|uzman|baş\s*fizyoterapist/iu],
  ['superiority or absolute safety', /(?<!\p{L})(?:en (?:iyi|etkili|başarili)|risksiz|yan etkisiz|zararsiz|tamamen ağrisiz|enfeksiyon riski yoktur)(?!\p{L})/iu],
  ['unreviewed social profile', /(?:instagram\.com|youtube\.com|youtu\.be)/iu],
  ['patient review markup', /["'](?:aggregaterating|reviewbody)["']\s*:/u],
];
const failures = [];
let renderedRoutes = new Set();

function walk(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? walk(path) : [path];
  });
}

function scan(path) {
  const text = readFileSync(path, 'utf8').normalize('NFC');
  // Fold both Turkish and ASCII uppercase I, including imported all-caps copy.
  const folded = text.toLocaleLowerCase('tr-TR').replaceAll('ı', 'i');
  if (/tedavi|uzman/u.test(relative(root, path).toLocaleLowerCase('tr-TR').replaceAll('ı', 'i'))) {
    failures.push(`${relative(root, path)}: restricted public filename or route`);
  }
  if (relative(root, path).startsWith('content/') && /randevu alabilirsiniz|randevu almak için/iu.test(folded)) {
    failures.push(`${relative(root, path)}: appointment solicitation in educational content`);
  }
  for (const [label, pattern] of rules) {
    const match = pattern.exec(folded);
    if (match) {
      const line = text.slice(0, match.index).split('\n').length;
      failures.push(`${relative(root, path)}:${line}: ${label}: ${match[0]}`);
    }
  }
  if (!rendered) {
    // Check educational Markdown links before a build is available. Noindex
    // destinations may still be linked; this check never changes that policy.
    if (extname(path) === '.mdx') {
      for (const match of text.matchAll(/\]\((\/(?!\/)[^\s)]+)\)/gu)) {
        const route = decodeURIComponent(new URL(match[1], 'http://local.test').pathname).replace(/\/$/u, '') || '/';
        const contentRoute = /^\/(blog|calisma-alanlari)\/([^/]+)$/u.exec(route);
        const destination = contentRoute
          ? join(root, 'content', contentRoute[1], `${contentRoute[2]}.mdx`)
          : join(root, 'src/app', route, 'page.js');
        if (!existsSync(destination) && !existsSync(join(root, 'public', route))) {
          failures.push(`${relative(root, path)}: broken Markdown link ${route}`);
        }
      }
    }
    // Literal local image references must resolve. Dynamic references still need visual QA.
    for (const match of text.matchAll(/["'(](\/[^"'\s)<>]+\.(?:webp|png|jpe?g|svg|ico))["')]/giu)) {
      if (!existsSync(join(root, 'public', match[1]))) {
        failures.push(`${relative(root, path)}: missing local image ${match[1]}`);
      }
    }
  } else {
    // Both sites statically render their public routes. Catch broken article/navigation links.
    for (const match of text.matchAll(/<a\b[^>]*\bhref="(\/(?!\/)[^"]*)"/gu)) {
      const targetPath = decodeURIComponent(new URL(match[1], 'http://local.test').pathname).replace(/\/$/u, '') || '/';
      if (!renderedRoutes.has(targetPath) && !existsSync(join(root, 'public', targetPath))) {
        failures.push(`${relative(root, path)}: broken internal link ${targetPath}`);
      }
    }
  }
}

let files;
if (rendered) {
  const directory = join(root, '.next/server/app');
  if (!existsSync(directory)) throw new Error('Build output missing: run next build first.');
  files = walk(directory).filter((path) => extname(path) === '.html');
  if (!files.length) throw new Error('No rendered HTML pages found.');
  renderedRoutes = new Set(files.map((path) => {
    const route = relative(directory, path).slice(0, -'.html'.length);
    return route === 'index' ? '/' : `/${route}`;
  }));
} else {
  files = ['src', 'content', 'public'].flatMap((directory) => walk(join(root, directory)))
    .filter((path) => textTypes.has(extname(path).toLowerCase()));
  const reviewed = JSON.parse(readFileSync(join(root, 'scripts/reviewed-media.json'), 'utf8'));
  const media = walk(join(root, 'public')).filter((path) => mediaTypes.has(extname(path).toLowerCase()));
  for (const path of media) {
    const name = relative(join(root, 'public'), path);
    const hash = createHash('sha256').update(readFileSync(path)).digest('hex');
    if (reviewed[name]?.sha256 !== hash) failures.push(`Unreviewed or changed public media: ${name}`);
  }
  for (const name of Object.keys(reviewed)) {
    if (!existsSync(join(root, 'public', name))) failures.push(`Stale reviewed-media entry: ${name}`);
  }
}

for (const path of files) scan(path);
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Public-content guard passed: ${files.length} ${rendered ? 'rendered HTML pages' : 'source/public text files and reviewed media'}.`);
}
