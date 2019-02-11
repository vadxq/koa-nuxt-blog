export const errorHandle = (ctx, next) => {
  console.log(next,ctx)
  return next().catch((err) => {
    if(err.status === 401){
      ctx.status = 401;
      ctx = {
        status: 0,
        msg: '401 error'
      }
    }else{
      ctx = {
        status: 0,
        msg: '500 error'
      }
    };
  })
};
