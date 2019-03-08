let localStorage
if (process.browser) {
  localStorage = window.localStorage
}

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
    $axios.setHeader('Authorization', token)
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
      // redirect('/400')
      localStorage.removeItem('token')
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