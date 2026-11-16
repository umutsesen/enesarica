import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join, relative } from 'node:path';

// These sites statically render their public pages. Verify the delivered HTML,
// rather than assuming that layout-level metadata survives Next.js inheritance.
const root = process.cwd();
const require = createRequire(join(root, 'package.json'));
const { siteUrl } = require('./next-sitemap.config.js');
const matter = require('gray-matter');
const output = join(root, '.next/server/app');
const issues = [];
const titles = new Map();
const canonicals = new Set();
const indexable = new Set();
const internalLinks = new Map();
const origin = new URL(siteUrl).origin;
const allowedTypes = new Set([
  'LocalBusiness', 'Organization', 'Person', 'PostalAddress', 'GeoCoordinates',
  'OpeningHoursSpecification', 'ContactPoint', 'City', 'WebSite', 'WebPage',
  'BreadcrumbList', 'ListItem', 'FAQPage', 'Question', 'Answer', 'Article',
  'BlogPosting', 'ImageObject',
]);

function files(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? files(path) : [path];
  });
}

function decode(value = '') {
  return value.replace(/&(?:amp|quot|apos|lt|gt|#\d+|#x[\da-f]+);/giu, (entity) => {
    const named = { '&amp;': '&', '&quot;': '"', '&apos;': "'", '&lt;': '<', '&gt;': '>' };
    if (named[entity]) return named[entity];
    const hexadecimal = entity.startsWith('&#x');
    return String.fromCodePoint(parseInt(entity.slice(hexadecimal ? 3 : 2, -1), hexadecimal ? 16 : 10));
  });
}

function attributes(tag) {
  return Object.fromEntries([...tag.matchAll(/([\w:-]+)="([^"]*)"/gu)]
    .map((match) => [match[1].toLowerCase(), decode(match[2])]));
}

function checkSchema(value, label, types) {
  if (Array.isArray(value)) return value.forEach((item) => checkSchema(item, label, types));
  if (!value || typeof value !== 'object') return;
  if (value['@type']) {
    const type = value['@type'];
    if (typeof type !== 'string' || !allowedTypes.has(type)) issues.push(`${label}: unreviewed/invalid schema type ${JSON.stringify(type)}`);
    types.add(type);
  }
  for (const item of Object.values(value)) checkSchema(item, label, types);
}

if (!existsSync(output)) throw new Error('Build output missing: run npm run build first.');
const pages = files(output).filter((path) => path.endsWith('.html') && !relative(output, path).startsWith('_'));
if (!pages.length) throw new Error('No public HTML pages found.');

for (const path of pages) {
  const label = relative(output, path);
  const route = label === 'index.html' ? '/' : `/${label.slice(0, -5)}`;
  const html = readFileSync(path, 'utf8');
  if (['index.html', 'iletisim.html'].includes(label) && /<form\b/i.test(html)) {
    issues.push(`${label}: website contact form is suspended`);
  }
  const expected = new URL(route, siteUrl).href.replace(/\/$/u, '');
  const links = new Set();
  for (const match of html.matchAll(/<a\b[^>]*>/gu)) {
    const href = attributes(match[0]).href;
    if (!href) continue;
    try {
      const destination = new URL(href, expected);
      if (destination.origin === origin) links.add(`${origin}${destination.pathname}`.replace(/\/$/u, ''));
    } catch { /* Non-URL anchors cannot establish a crawl path. */ }
  }
  internalLinks.set(expected, links);
  const titleTags = [...html.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gu)];
  const title = decode(titleTags[0]?.[1]).trim();
  if (titleTags.length !== 1 || !title) issues.push(`${label}: expected one nonempty title`);
  if (titles.has(title)) issues.push(`${label}: duplicate title with ${titles.get(title)}`);
  titles.set(title, label);
  if ([...html.matchAll(/<h1(?:\s[^>]*)?>/gu)].length !== 1) issues.push(`${label}: expected exactly one H1`);
  if ([...html.matchAll(/<main(?:\s[^>]*)?>/gu)].length !== 1) issues.push(`${label}: expected exactly one main landmark`);
  if (route === '/') {
    const heading = /<h1\b[^>]*>/u.exec(html)?.[0] || '';
    if (/opacity:\s*0(?:;|")/u.test(heading)) issues.push(`${label}: homepage H1 must be visible before hydration`);
  }
  const meta = new Map([...html.matchAll(/<meta\b[^>]*>/gu)].map((match) => {
    const tag = attributes(match[0]);
    return [tag.name || tag.property, tag.content];
  }));
  const canonicalTags = [...html.matchAll(/<link\b[^>]*>/gu)].map((match) => attributes(match[0]))
    .filter((tag) => tag.rel === 'canonical');
  const canonical = canonicalTags[0]?.href?.replace(/\/$/u, '');
  if (canonicalTags.length !== 1 || canonical !== expected) issues.push(`${label}: canonical must identify its own public URL`);
  if (canonicals.has(canonical)) issues.push(`${label}: duplicate canonical`);
  canonicals.add(canonical);
  if (!/\bnoindex\b/u.test(meta.get('robots') || '')) indexable.add(expected);
  for (const name of ['description', 'og:title', 'og:description', 'og:image', 'twitter:title', 'twitter:description', 'twitter:image']) {
    if (!meta.get(name)?.trim()) issues.push(`${label}: missing ${name}`);
  }
  if (meta.get('og:url')?.replace(/\/$/u, '') !== expected) issues.push(`${label}: OpenGraph URL must match canonical`);
  // On article pages, homepage social text is an inheritance regression.
  if (route.startsWith('/blog/') && (meta.get('og:title') !== meta.get('twitter:title') || meta.get('og:description') !== meta.get('twitter:description'))) {
    issues.push(`${label}: article OpenGraph and Twitter text disagree`);
  }
  for (const name of ['og:image', 'twitter:image']) {
    const image = meta.get(name);
    if (!image) continue;
    try {
      const url = new URL(image, siteUrl);
      if (url.origin === new URL(siteUrl).origin && !existsSync(join(root, 'public', decodeURIComponent(url.pathname)))) {
        issues.push(`${label}: social image does not exist: ${url.pathname}`);
      }
    } catch { issues.push(`${label}: invalid ${name} URL`); }
  }
  const types = new Set();
  for (const match of html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gu)) {
    try { checkSchema(JSON.parse(match[1]), label, types); }
    catch { issues.push(`${label}: malformed JSON-LD`); }
  }
  if (!types.has('LocalBusiness')) issues.push(`${label}: business JSON-LD must be server-rendered`);
  if (route === '/sss' && (!types.has('FAQPage') || !types.has('BreadcrumbList'))) issues.push(`${label}: FAQ and breadcrumb JSON-LD must be server-rendered`);
  if (route === '/' && siteUrl.includes('fizyoterapistenesarica') && !types.has('Person')) issues.push(`${label}: person JSON-LD must be server-rendered`);
}

// A sitemap entry alone does not make a page discoverable through site navigation.
// Traverse rendered anchors so circular orphan groups also fail this guard.
const reachable = new Set();
const pending = [siteUrl.replace(/\/$/u, '')];
while (pending.length) {
  const url = pending.pop();
  if (reachable.has(url)) continue;
  reachable.add(url);
  for (const link of internalLinks.get(url) || []) {
    if (internalLinks.has(link) && !reachable.has(link)) pending.push(link);
  }
}
for (const url of indexable) {
  if (!reachable.has(url)) issues.push(`Indexable page has no rendered link path from homepage: ${url}`);
}

// Validate compiled routing rather than only the source declaration: requests carry
// percent-encoded paths, and a literal Unicode source may silently fail to match.
const routing = JSON.parse(readFileSync(join(root, '.next/routes-manifest.json'), 'utf8'));
for (const redirect of routing.redirects || []) {
  if (redirect.source.includes(':') || !redirect.destination.startsWith('/')) continue;
  try {
    const wirePath = encodeURI(decodeURI(redirect.source));
    if (!new RegExp(redirect.regex, routing.caseSensitive ? '' : 'i').test(wirePath)) {
      issues.push(`Redirect does not match its encoded request path: ${redirect.source}`);
    }
    const destination = new URL(redirect.destination, siteUrl).href.replace(/\/$/u, '');
    if (!internalLinks.has(destination)) issues.push(`Redirect destination is not a generated page: ${redirect.destination}`);
  } catch { issues.push(`Invalid compiled redirect: ${redirect.source}`); }
}

const sitemapUrls = new Set();
const sitemapFiles = readdirSync(join(root, 'public')).filter((name) => /^sitemap-\d+\.xml$/u.test(name));
if (!sitemapFiles.length) issues.push('No generated sitemap files found');
for (const name of sitemapFiles) {
  const xml = readFileSync(join(root, 'public', name), 'utf8');
  for (const match of xml.matchAll(/<url>([\s\S]*?)<\/url>/gu)) {
    const url = decode(/<loc>(.*?)<\/loc>/u.exec(match[1])?.[1]);
    const normalized = url.replace(/\/$/u, '');
    sitemapUrls.add(normalized);
    const modified = /<lastmod>(.*?)<\/lastmod>/u.exec(match[1])?.[1];
    const route = new URL(url).pathname;
    const source = [join(root, 'content', `${route.replace(/^\/blog\//u, '')}.mdx`), join(root, 'content', `${route.slice(1)}.mdx`)]
      .find((candidate) => existsSync(candidate));
    if (source) {
      const { data } = matter(readFileSync(source, 'utf8'));
      const actual = data.updatedDate || data.date;
      if (actual && (!modified || new Date(modified).toISOString() !== new Date(actual).toISOString())) issues.push(`${route}: sitemap lastmod must match its content date`);
    } else if (modified) issues.push(`${route}: omit lastmod when no recorded content date exists`);
  }
}
for (const url of indexable) if (!sitemapUrls.has(url)) issues.push(`Indexable page missing from sitemap: ${url}`);
for (const url of sitemapUrls) if (!indexable.has(url)) issues.push(`Sitemap includes a missing or noindex page: ${url}`);

if (issues.length) {
  console.error(issues.slice(0, 25).join('\n'));
  console.error(`SEO guard failed: ${issues.length} findings across ${pages.length} pages.`);
  process.exitCode = 1;
} else {
  console.log(`SEO guard passed: ${pages.length} pages, ${sitemapUrls.size} sitemap URLs, metadata, server-rendered schema, content dates and crawlable navigation.`);
}
