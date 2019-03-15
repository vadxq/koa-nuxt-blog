const cookieparser = require('cookieparser')

export default function ({store, route, redirect, req}) {
  // If the user is not authenticated
  if (process.server) {
    if (req && req.headers && req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      if(parsed.auth) {
        store.commit('setAuth', parsed.auth)
      }
    }
  }
}