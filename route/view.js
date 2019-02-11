import {fetchArticle, getArticle} from '../controls/list';

const viewRouter = require('koa-router')();

viewRouter
  .get('/list', fetchArticle)
  .get('/one/:id', getArticle);

module.exports = viewRouter;