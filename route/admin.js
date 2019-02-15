import {fetchAllArticle, saveArticle, changeArticle, getDeArticle} from '../controls/list';

const adminRouter = require('koa-router')();

adminRouter
  .get('/list', fetchAllArticle)
  .post('/one', saveArticle)
  .put('/one/:id', changeArticle)
  .get('/one/:id', getDeArticle);

module.exports = adminRouter;