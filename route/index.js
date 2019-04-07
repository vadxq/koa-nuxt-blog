import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import schema from '../graphql/schema';
// import { adminRouter } from './admin';
// import { viewRouter } from './view';

const viewRouter = require('./view');
const adminRouter = require('./admin');
const userRouter = require('./user');
const sitemapRouter = require('./sitemap');

const router = require('koa-router')();

router.use('/api/view', viewRouter.routes());
router.use('/api/admin', adminRouter.routes());
router.use('/api/user', userRouter.routes());
router.use('/sitemap.xml', sitemapRouter.routes());

router
  .post('/graphql', async (ctx, next) => {
    await graphqlKoa({schema: schema})(ctx, next)
  })
  .get('/graphql', async (ctx, next) => {
    await graphqlKoa({schema: schema})(ctx, next)
  })
  .get('/graphiql', async (ctx, next) => {
    await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
  });

module.exports = router;