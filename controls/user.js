import mongoose from 'mongoose';
import crypto from 'crypto';
import jwt from 'jsonwebtoken';
const User = mongoose.model('User');
import { jwt_secret } from '../config/index'

// 注册
export const register = async (ctx, next) => {
  const data = ctx.request.body;
  const checkUser = await User.findOne({
      name: data.name
  });

  if(checkUser !== null){
    ctx.body = {
      status: 0,
      msg: '该用户已存在'
    };
  } else {
    const user = new User({
        name: data.name,
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
  if(!data.name || !data.password){
    ctx.body = {
      status: 0,
      msg: '账号或密码错误'
    };
  };

  const result = await User.findOne({
    name: data.name,
    password: crypto.createHash('md5').update(data.password).digest('hex')
  });

  if(result !== null){
    const token = jwt.sign({
      name: result.name,
      _id: result._id
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
export const getUser = async (ctx, next) => {
  const data = ctx.state.user;
  const user = await User.findById(data._id);

  if(user !== null){
    const result = {
      _id: user._id,
      name: user.name,
      email: user.email
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