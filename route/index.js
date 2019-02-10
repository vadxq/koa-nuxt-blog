import { graphqlKoa, graphiqlKoa } from 'graphql-server-koa';
import {saveArticle, changeArticle, fetchArticle, fetchAllArticle} from '../controls/list';

const router = require('koa-router')();

router.post('/add', saveArticle)
      .put('/change', changeArticle)
      .get('/list', fetchArticle)
      .get('/alllist', fetchAllArticle)
      .get('/graphiql', async (ctx, next) => {
        await graphiqlKoa({endpointURL: '/graphql'})(ctx, next)
      })

module.exports = router