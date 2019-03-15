const cookieparser = require('cookieparser')
const getCookie = function (req) {
  if (req && req.headers && req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie)
    return parsed
  } else {
    return {auth: null}
  }
}

export default function ({store, route, redirect, req}) {
  // If the user is not authenticated
  const { auth } = getCookie(req)
  console.log('middle')
  console.log(auth)
  if (auth) {
    store.commit('setAuth', auth)
    return store.dispatch('getUserInfo')
  }
  // const routePath = route.path
  // const extraPath = ['/']
  // if ((!store.state.auth) && extraPath.indexOf(routePath) === -1) {
  //   return redirect('/login')
  // }
}