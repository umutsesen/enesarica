const fs = require('fs');
const pathModule = require('path');
const matter = require('gray-matter');

function getContentDate(contentDir, slug) {
  try {
    const filePath = pathModule.join(process.cwd(), 'content', contentDir, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContents);
    return data.updatedDate || data.date || null;
  } catch {
    return null;
  }
}

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.fizyoterapistenesarica.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';
    let lastmod = new Date().toISOString();

    if (path === '/') { priority = 1.0; changefreq = 'daily'; }
    else if (path.startsWith('/tedavi-alanlari/') && path !== '/tedavi-alanlari') {
      priority = 0.9;
      changefreq = 'monthly';
      const slug = path.replace('/tedavi-alanlari/', '');
      const date = getContentDate('tedaviler', slug);
      if (date) lastmod = new Date(date).toISOString();
    }
    else if (path === '/tedavi-alanlari' || path === '/hakkimda' || path === '/iletisim') { priority = 0.85; }
    else if (path.startsWith('/blog/') && path !== '/blog') {
      priority = 0.8;
      changefreq = 'monthly';
      const slug = path.replace('/blog/', '');
      const date = getContentDate('blog', slug);
      if (date) lastmod = new Date(date).toISOString();
    }

    return { loc: path, changefreq, priority, lastmod };
  },
};
