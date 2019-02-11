import {getUser, login, register} from '../controls/user';

const userRouter = require('koa-router')();

userRouter
  .post('/register', register)
  .post('/login', login)
  .get('/one/:id', getUser);

module.exports = userRouter;