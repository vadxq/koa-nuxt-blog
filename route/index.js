import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import {saveArticle, changeArticle, fetchArticle, fetchAllArticle} from '../controls/list';
import schema from '../graphql/schema';

const router = require('koa-router')();

router
  .post('/add', saveArticle)
  .put('/change', changeArticle)
  .get('/list', fetchArticle)
  .get('/alllist', fetchAllArticle)
  .get('/graphiql', async (ctx, next) => {
    await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
  });

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