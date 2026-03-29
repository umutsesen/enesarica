import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import remarkHtml from 'remark-html';

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

export function getAllPosts(type = 'blog') {
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

  return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function generateStaticParams(type = 'blog') {
  const dir = getDirectory(type);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((filename) => ({ slug: filename.replace(/\.mdx$/, '') }));
}

export function getAllBlogPosts() {
  return getAllPosts('blog');
}

export function getBlogPost(slug) {
  return getRawPost(slug, 'blog');
}

export function getAllTreatmentPosts() {
  return getAllPosts('tedaviler');
}

export function getTreatmentPost(slug) {
  return getRawPost(slug, 'tedaviler');
}
