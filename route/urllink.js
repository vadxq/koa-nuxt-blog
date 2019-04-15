import {
  saveUrllink,
  fetchUrllist,
  putUrllink,
  delUrllink
} from '../controls/urllinks';

const urllinkRouter = require('koa-router')();

urllinkRouter
  .get('/list', fetchUrllist)
  .post('/one', saveUrllink)
  .put('/one', putUrllink)
  .delete('/one/:id', delUrllink)

module.exports = urllinkRouter;