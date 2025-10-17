/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ryanflin.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
}