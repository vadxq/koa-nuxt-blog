import {
  saveSwaper,
  fetchSwaper,
  putSwaper,
  delSwaper
} from '../controls/swaper';

const swaperRouter = require('koa-router')();

swaperRouter
  .get('/list', fetchSwaper)
  .post('/one', saveSwaper)
  .put('/one', putSwaper)
  .delete('/one/:id', delSwaper)

  module.exports = swaperRouter;