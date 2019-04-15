import mongoose from 'mongoose';
require('../mongo/schema/urllinks');
const Urllinks = mongoose.model('Urllinks');

// 添加链接(admin)
export const saveUrllink = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.request.body;
    const info = new Urllinks(body);
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

// 获取列表
export const fetchUrllist = async (ctx, next) => {
  console.log('aaaa')
  const info = await Urllinks.find({
    dele: false
  }, {
    url: 1,
    date: 1,
    weight: 1,
    avtor: 1,
    username: 1,
    id: 1
  });
  console.log(info)

  if (info.length) {
    // 按权重排序
    console.log(info, '1')
    let infoList = await info.sort((a, b) => {
      return Number(a.weight) - Number(b.weight)
    }).reverse()
    console.log(infoList, '2')
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
export const putUrllink = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.request.body;

    if (body !== null && body !== ' ') {
      const changeInfo = await Urllinks.findByIdAndUpdate(body._id, {$set: {
        avtor: body.avtor,
        username: body.username,
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
export const delUrllink = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.params;
  
    if (body !== null && body !== ' ') {
      const changeInfo = await Urllinks.findByIdAndUpdate(body.id, {$set: {
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