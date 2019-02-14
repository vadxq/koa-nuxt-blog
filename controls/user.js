import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
import { jwt_secret } from '../config/index'

require('../mongo/schema/user');
const User = mongoose.model('User');


// 注册
export const register = async (ctx, next) => {
  const data = ctx.request.body;
  const checkUser = await User.findOne({
      username: data.username
  });

  if(checkUser !== null){
    ctx.body = {
      status: 0,
      msg: '该用户已存在'
    };
  } else {
    const user = new User({
        name: data.name,
        username: data.username,
        password: crypto.createHash('md5').update(data.password).digest('hex'), // 密码加密存储
        email: data.email
    });
  
    const result = await user.save();
  
    if (result !== null) {
      ctx.body = {
        status: 1,
        msg: '注册成功'
      };
    } else {
      ctx.body = {
        status: 0,
        msg: '注册失败'
      };
    };
  }
};
   
// 用户登录
export const login = async (ctx, next) => {
  const data = ctx.request.body;
  if(!data.username || !data.password){
    ctx.body = {
      status: 0,
      msg: '账号或密码错误'
    };
  };

  const result = await User.findOne({
    username: data.username,
    password: crypto.createHash('md5').update(data.password).digest('hex')
  });

  if(result !== null){
    const token = jwt.sign({
      username: result.username,
      isAdmin: result.isAdmin
    }, jwt_secret, { expiresIn: 60*60 });
    
    ctx.body = {
      status: 1,
      msg: token
    };
  }else{
    ctx.body = {
      status: 0,
      msg: '账号或密码错误'
    };
  };
};

// 获取用户信息
// 这里有一个state，是jwt解析token赋值过来的
export const getUser = async (ctx, next) => {
  const data = ctx.state.user;
  const user = await User.findById(data.username);

  if(user !== null){
    const result = {
      username: user.username,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin
    };
    ctx.body = {
      status: 1,
      msg: result
    };
  }else{
    ctx.body = {
      status: 0,
      msg: '获取失败'
    };
  }
};