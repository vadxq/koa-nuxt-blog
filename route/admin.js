import {
  fetchAllArticle,
  saveArticle,
  changeArticle,
  getDeArticle,
  checkArticle,
  backArticle,
  delArticle
} from '../controls/list';

const adminRouter = require('koa-router')();

adminRouter
  .get('/list', fetchAllArticle)
  .post('/one', saveArticle)
  .put('/one/:id', changeArticle)
  .get('/one/:id', getDeArticle)
  .get('/check/:id', checkArticle)
  .get('/back/:id', backArticle)
  .get('/del/:id', delArticle);

module.exports = adminRouter;