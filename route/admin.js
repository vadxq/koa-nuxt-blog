import {fetchAllArticle, saveArticle, changeArticle, getDeArticle} from '../controls/list';

const router = require('koa-router')();

router
  .get('/admin/list', fetchAllArticle)
  .post('./admin/one/:id', saveArticle)
  .put('/admin/one/:id', changeArticle)
  .get('/admin/one/:id', getDeArticle);

module.exports = adminRouter;