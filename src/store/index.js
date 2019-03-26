// import Vuex from 'vuex'
const cookieparser = require('cookieparser')

// import mutations from './mutations'
// import state from './state'

// const createStore = () => {
//   return new Vuex.Store({
//     state,
//     mutations,
//     actions: {
//       async nuxtServerInit ({store, state, commit}, {req, res, redirect, app}) {
//         try {
//           let auth = null
//           if (req.headers.cookie) {
   
//             const parsed = cookieparser.parse(req.headers.cookie)
//             try {
//               // auth = JSON.parse(parsed.auth)
//               auth = parsed.auth
//             } catch (err) {
//               console.log('auth' + err)
//               // No valid cookie found
//             }
//             commit('setAuth', auth)
//           }
//         } catch (e) {
//           if (!e.response) {
//             console.error(e)
//           }
//           if (e.response.status === 401) {// 凭据无法通过验证
//             redirect('/login')// 跳转到登录页面
//           }
//         }
//       }
//     }
//   })
// }

// export default createStore

export const state = () => ({
  activeMsg: {
    id: '',
    status: ''
  },
  islogin: false,
  isModel: false,
  content: '',
  alertMsg: {
    status: '',
    msg: ''
  },
  auth: ''
})
export const getters = {
  // getToken(state){
  //   return state.token
  // },
}
export const mutations = {
  setActiveMsg (state, text) {
    state.activeMsg = text
  },
  setLogin (state, text) {
    state.islogin = text
  },
  setModel (state, text) {
    state.isModel = text
  },
  setContent (state, text) {
    state.content = text
  },
  setAlertMsg (state, text) {
    state.alertMsg.status = text.status
    state.alertMsg.msg = text.msg
  },
  setAuth (state, text) {
    state.auth = text
  }
}
export const actions = {
  async nuxtServerInit ({store, state, commit}, {req, res, redirect, app}) {
    try {
      let auth = null
      if (req.headers.cookie) {

        const parsed = cookieparser.parse(req.headers.cookie)
        try {
          auth = JSON.parse(parsed.auth)
          // auth = parsed.auth
        } catch (err) {
          console.log('auth' + err)
          // No valid cookie found
        }
        commit('setAuth', auth)
      }
    } catch (e) {
      if (!e.response) {
        console.error(e)
      }
      if (e.response.status === 401) {// 凭据无法通过验证
        commit('setAuth', null)
        redirect('/login')// 跳转到登录页面
      }
    }
  }
}