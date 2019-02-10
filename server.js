import Koa from 'koa';
import Router from 'koa-router';
import KoaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';

require('./mongo');
const GraphqlRouter = require('./route');

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + 'public'));

router.use('', GraphqlRouter.routes())

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen('7190')

console.log('app run in 7190')