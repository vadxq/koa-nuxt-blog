export default function ({
  $axios,
  redirect,
  store
}) {
  $axios.onRequest(config => {
    let token = localStorage.getItem('token')
    $axios.setHeader('Authorization', token)
  })

  $axios.onResponse(async response => {
    traverse(response).forEach((value) => {
      if (!supportWebp) {
        return
      }

      if (typeof value !== 'string') {
        return
      }

      if (!value.includes('static.ncuhome.cn')) {
        return
      }

      if (value.endsWith('.jpg') || value.endsWith('.png') || value.endsWith('.jpeg')) {
        value = getWebp(value)
        return value
      }

      const div = document.createElement('div')
      div.innerHTML = value
      const nodes = Array.from(div.querySelectorAll('img'))
      const images = nodes.map(node => node.src)

      images.forEach(uri => {
        value.replace(uri, getWebp(uri))
      })
    })
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