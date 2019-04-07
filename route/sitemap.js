import { getSitemap } from '../controls/sitemap';

const sitemapRouter = require('koa-router')();

sitemapRouter.get('/', getSitemap);

module.exports = sitemapRouter;