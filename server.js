import Koa from 'koa';
import Router from 'koa-router';
// import KoaStatic from 'koa-static';
import bodyParser from 'koa-bodyparser';
import { port, jwt_secret } from './config/index';
import json from 'koa-json';
import koajwt from 'koa-jwt';
import { errorHandle } from './middlewares/errorHandle';
import routes from './route';

require('./mongo');
// const GraphqlRouter = require('./route');

const app = new Koa();
const router = new Router();

console.log('aaa')
app.use(bodyParser());
// app.use(KoaStatic(__dirname + 'public'));
app.use(json());

// 错误处理
// app.use(errorHandle());

app.use(koajwt({
  secret: jwt_secret
}).unless({
  path: [/\/api\/user\/register/, /\/api\/user\/login/, /\/api\/view/]
}));

// router.use('', GraphqlRouter.routes())
router.use('', routes.routes());

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(port)

console.log(`app run in ${port}`)