import Koa from 'koa';
import Router from 'koa-router';
import KoaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';

const app = new Koa();
const router = new Router();

app.use(bodyParser());
app.use(KoaStatic(__dirname + 'public'));

router.get('/test', (ctx, next) => ctx.body = 'test page');

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen('7190')

console.log('app run in 7190')