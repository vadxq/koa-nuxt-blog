const Cookie = require('js-cookie')

export default function ({
  $axios,
  redirect,
  store
}) {
  $axios.onRequest(config => {
    let token
    if (process.browser) {
      token = window.localStorage.getItem('token')
    }
    if (process.server) {
      token = store.state.auth
      if (!token) {
        token = Cookie.get('auth')
      }
    }
    $axios.setHeader('Authorization', 'Bearer ' + token)
  })

  $axios.onResponse(async response => {
    return response
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/400')
    }
    if (code === 401) {
      redirect('/login')
      // localStorage.removeItem('token')
      let errorMs = {
        status: 'error',
        msg: '登陆过期'
      }
      store.state.alertMsg = errorMs
    }
    if (code === 403) {
      let errorMs = {
        status: 'error',
        msg: error.response.data.message
      }
      store.state.alertMsg = errorMs
    }
    if (code === 500) {
      let errorMs = {
        status: 'error',
        msg: error.response.data.message
      }
      store.state.alertMsg = errorMs
    }
  })
}