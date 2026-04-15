import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';
import { shouldIndexBlogSlug, shouldIndexTreatmentSlug } from '@/lib/indexing-policy';

const blogDirectory = path.join(process.cwd(), 'content/blog');
const tedavilerDirectory = path.join(process.cwd(), 'content/tedaviler');

function getDirectory(type) {
  return type === 'blog' ? blogDirectory : tedavilerDirectory;
}

function getRawPost(slug, type) {
  const dir = getDirectory(type);
  const filePath = path.join(dir, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  const wordCount = content.split(/\s+/).length;
  return {
    slug,
    content,
    readingTime: Math.ceil(wordCount / 200),
    ...data,
  };
}

export async function compileContent(rawContent) {
  const result = await remark().use(remarkHtml).process(rawContent);
  return result.toString();
}

function shouldIncludePost(type, slug, includeNoindex) {
  if (includeNoindex) return true;
  if (type === 'blog') return shouldIndexBlogSlug(slug);
  return shouldIndexTreatmentSlug(slug);
}

export function getAllPosts(type = 'blog', options = {}) {
  const { includeNoindex = false } = options;
  const dir = getDirectory(type);
  if (!fs.existsSync(dir)) return [];

  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx'));

  const posts = files.map((filename) => {
    const filePath = path.join(dir, filename);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return {
      slug: filename.replace(/\.mdx$/, ''),
      readingTime: Math.ceil(content.split(/\s+/).length / 200),
      ...data,
    };
  });

  return posts
    .filter((post) => shouldIncludePost(type, post.slug, includeNoindex))
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function generateStaticParams(type = 'blog', options = {}) {
  return getAllPosts(type, { includeNoindex: true, ...options }).map((post) => ({
    slug: post.slug,
  }));
}

export function getAllBlogPosts(options = {}) {
  return getAllPosts('blog', options);
}

export function getBlogPost(slug) {
  return getRawPost(slug, 'blog');
}

export function getAllTreatmentPosts(options = {}) {
  return getAllPosts('tedaviler', { includeNoindex: true, ...options });
}

export function getTreatmentPost(slug) {
  return getRawPost(slug, 'tedaviler');
}
