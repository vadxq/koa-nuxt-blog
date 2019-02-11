import mongoose from 'mongoose';

const List = mongoose.model('List');

export const saveArticle = async (ctx, next) => {
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
};

// 获取单篇文章
export const getArticle = async (ctx, next) => {
  const body = ctx.request.body;

  if (body !== null && body !== ' ') {
    const getone = await List.findByIdAndUpdate({id: body.id, dele: false, checked: true}, {
      _id: 1,
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

// 编辑文章
export const changeArticle = async (ctx, next) => {
  const body = ctx.request.body;

  if (body !== null && body !== ' ') {
    const changeInfo = await List.findByIdAndUpdate({id: body.id}, {$set: {
      title: body.title,
      content: body.content,
      description: body.description,
      coverimg: body.coverimg,
      checked: body.checked,
      dele: body.dele
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

};

// 获取已发表文章列表
export const fetchArticle = async (ctx, next) => {
  const info = await List.find({
    dele: false,
    checked: true
  }, {
    _id: 1,
    title: 1,
    content: 1,
    createtime: 1,
    updatetime: 1,
    views: 1,
    links: 1,
    description: 1,
    coverimg: 1
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
};

// 获取所有文章列表
export const fetchAllArticle = async (ctx, next) => {
  const info = await List.find({
    dele: false
  }, {
    _id: 1,
    title: 1,
    content: 1,
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
};
