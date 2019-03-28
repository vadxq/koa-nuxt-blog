import mongoose from 'mongoose';
require('../mongo/schema/list');
const List = mongoose.model('List');
// 添加文章(admin)
export const saveArticle = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.request.body;
    const info = new List(body);
    const saveInfo = await info.save();
  
    if (saveInfo) {
      ctx.body = {
        status: 1,
        msg: saveInfo
      };
    } else {
      console.log(changeInfo);
      ctx.body = {
        status: 1
      };
    };
  } else {
    ctx.status = 401;
  };
};

// 获取单篇文章
export const getArticle = async (ctx, next) => {
  const body = ctx.params;
  console.log(body)

  if (body !== null && body !== ' ') {
    const getone = await List.findOne({url: body.id, dele: false, checked: true}, {
      url: 1,
      title: 1,
      content: 1,
      createtime: 1,
      updatetime: 1,
      views: 1,
      links: 1,
      description: 1,
      coverimg: 1
    });
    
    if (getone) {
      
      ctx.body = {
        status: 1,
        msg: getone
      };
      await List.findOneAndUpdate({url: body.id}, {$set: {
        views: getone.views += 1
      }}, {multi: false});
    } else {
      console.log(getone);
      ctx.body = {
        status: 0
      };
    };
  } else {
    ctx.body = {
      status: 0
    };
  };

};

// 编辑文章(admin)
export const changeArticle = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.request.body;
  
    if (body !== null && body !== ' ') {
      const changeInfo = await List.findOneAndUpdate({url: body.url}, {$set: {
        title: body.title,
        content: body.content,
        description: body.description,
        coverimg: body.coverimg,
        url: body.url
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

// 获取已发表文章列表
export const fetchArticle = async (ctx, next) => {
  console.log('aaaa')
  const info = await List.find({
    dele: false,
    checked: true
  }, {
    url: 1,
    title: 1,
    createtime: 1,
    updatetime: 1,
    views: 1,
    links: 1,
    description: 1,
    coverimg: 1
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
export const fetchAllArticle = async (ctx, next) => {
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

// 获取单篇文章(admin)
export const getDeArticle = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.params;
    if (body !== null && body !== ' ') {
      const getone = await List.findOne({url: body.id, dele: false}, {
        url: 1,
        title: 1,
        content: 1,
        createtime: 1,
        updatetime: 1,
        views: 1,
        links: 1,
        description: 1,
        coverimg: 1,
        checked: 1,
        dele: 1
      });
      
      if (getone) {
        ctx.body = {
          status: 1,
          msg: getone
        };
      } else {
        console.log(getone);
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

// 审核文章（admin）
export const checkArticle = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.params;
  
    if (body !== null && body !== ' ') {
      const changeInfo = await List.findOneAndUpdate({url: body.id}, {$set: {
        checked: true
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

// 撤回文章（admin）
export const backArticle = async (ctx, next) => {
  if (ctx.state.user.isAdmin) {
    const body = ctx.params;
  
    if (body !== null && body !== ' ') {
      const changeInfo = await List.findOneAndUpdate({url: body.id}, {$set: {
        checked: false
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