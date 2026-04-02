/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.fizyoterapistenesarica.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    let priority = 0.7;
    let changefreq = 'weekly';
    if (path === '/') { priority = 1.0; changefreq = 'daily'; }
    else if (path.startsWith('/tedavi-alanlari/') && path !== '/tedavi-alanlari') { priority = 0.9; changefreq = 'monthly'; }
    else if (path === '/tedavi-alanlari' || path === '/hakkimda' || path === '/iletisim') { priority = 0.85; }
    else if (path.startsWith('/blog/')) { priority = 0.8; changefreq = 'monthly'; }
    return { loc: path, changefreq, priority, lastmod: new Date().toISOString() };
  },
};
