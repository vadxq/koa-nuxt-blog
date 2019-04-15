import mongoose from 'mongoose';
require('../mongo/schema/swaper');
const Swaper = mongoose.model('Swaper');

// 添加封面图(admin)
export const saveSwaper = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.request.body;
    const info = new Swaper(body);
    const saveInfo = await info.save();
  
    if (saveInfo) {
      ctx.body = {
        status: 1,
        msg: saveInfo
      };
    } else {
      console.log(changeInfo);
      ctx.body = {
        status: 0
      };
    };
  } else {
    ctx.status = 401;
  };
};

// 获取封面图列表
export const fetchSwaper = async (ctx, next) => {
  console.log('aaaa')
  const info = await Swaper.find({
    dele: false
  }, {
    url: 1,
    date: 1,
    cover: 1,
    title: 1,
    weight: 1,
    id: 1
  });
  console.log(info)

  if (info.length) {
    // 按权重排序
    let infoList = await info.sort((a, b) => {
      return Number(a.weight) - Number(b.weight)
    }).reverse()
    ctx.body = {
      status: 1,
      info: infoList
    };
  } else {
    ctx.body = {
      status: 0
    };
  };
};

// 修改链接(admin)
export const putSwaper = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.request.body;

    if (body !== null && body !== ' ') {
      const changeInfo = await Swaper.findByIdAndUpdate(body._id, {$set: {
        title: body.title,
        cover: body.cover,
        url: body.url,
        weight: body.weight
      }}, {multi: false});

      if (changeInfo) {
        ctx.body = {
          status: 1,
          msg: changeInfo
        };
      } else {
        ctx.body = {
          status: 0
        };
      };
    } else {
      ctx.body = {
        status: 0
      };
    };
  } else {
    ctx.status = 401;
  };
};

// 删除文章（admin)
export const delSwaper = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.params;
  
    if (body !== null && body !== ' ') {
      const changeInfo = await Swaper.findByIdAndUpdate(body.id, {$set: {
        dele: true
      }}, {multi: false});
      
      if (changeInfo) {
        ctx.body = {
          status: 1,
          msg: changeInfo
        };
      } else {
        console.log(changeInfo);
        ctx.body = {
          status: 0
        };
      };
    } else {
      ctx.body = {
        status: 0
      };
    };
  } else {
    ctx.status = 401;
  };
};