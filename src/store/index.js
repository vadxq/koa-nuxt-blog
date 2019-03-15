import Vuex from 'vuex'
const cookieparser = require('cookieparser')

import mutations from './mutations'
import state from './state'

const createStore = () => {
  return new Vuex.Store({
    state,
    mutations,
    actions: {
      async nuxtServerInit ({store, state, commit}, {req, res, redirect, app}) {
        try {
          let auth = null
          if (req.headers.cookie) {
   
            const parsed = cookieparser.parse(req.headers.cookie)
            try {
              // auth = JSON.parse(parsed.auth)
              auth = parsed.auth
            } catch (err) {
              // No valid cookie found
            }
            commit('setAuth', auth)
          }
        } catch (e) {
          if (!e.response) {
            console.error(e)
          }
          if (e.response.status === 401) {// 凭据无法通过验证
            redirect('/login')// 跳转到登录页面
          }
        }
      }
    }
  })
}

export default createStore