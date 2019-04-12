import mongoose from 'mongoose';
require('../mongo/schema/urllinks');
const Urllinks = mongoose.model('Urllinks');

// 添加链接(admin)
export const saveLink = async (ctx, next) => {
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
export const fetchList = async (ctx, next) => {
  console.log('aaaa')
  const info = await Urllinks.find({
    dele: false
  }, {
    url: 1,
    date: 1,
    weight: 1,
    avtor: 1,
    username: 1
  });
  console.log(info)

  if (info.length) {
    ctx.body = {
      status: 1,
      info: info
    };
  } else {
    ctx.body = {
      status: 0
    };
  };
};

// 获取所有文章列表(admin)
export const fetchAllList = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const info = await List.find({
      dele: false
    }, {
      url: 1,
      title: 1,
      createtime: 1,
      updatetime: 1,
      views: 1,
      links: 1,
      description: 1,
      coverimg: 1,
      checked: 1
    });
  
    if (info.length) {
      ctx.body = {
        status: 1,
        info: info
      };
    } else {
      console.log(info);
      ctx.body = {
        status: 0
      };
    };
  } else {
    ctx.status = 401;
  };
};

// 删除文章（admin)
export const delArticle = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.params;
  
    if (body !== null && body !== ' ') {
      const changeInfo = await List.findOneAndUpdate({url: body.id}, {$set: {
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