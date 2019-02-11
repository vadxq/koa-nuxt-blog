// 处理错误中间件
export const errorHandle = function () {
  return (ctx, next) => {
    next().catch((err) => {
      if(err.status === 401){
        ctx.status = 401;
        ctx.body = {
          status: 0,
          msg: '401 error'
        }
      }else{
        ctx.body = {
          status: 0,
          msg: '500 error'
        }
      };
    })
  };
};
