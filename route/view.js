import {fetchArticle, getArticle} from '../controls/list';

const router = require('koa-router')();

router
  .get('/view/list', fetchArticle)
  .get('/view/one/:id', getArticle);

module.exports = router;