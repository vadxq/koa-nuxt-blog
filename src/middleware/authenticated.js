// const cookieparser = require('cookieparser')

// export default function ({store, route, redirect, req}) {
//   // If the user is not authenticated
//   if (process.server) {
//     if (req && req.headers && req.headers.cookie) {
//       const parsed = cookieparser.parse(req.headers.cookie)
//       if(parsed.auth) {
//         store.commit('setAuth', parsed.auth)
//       }
//     }
//   }
// }
export default function ({ store, redirect }) {
  // 如果用户未经过身份验证
  if (!store.state.auth) {
    return redirect('/login')
  }
}