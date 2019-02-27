const mutations = {
  setSearchKeys (state, text) {
    state.searchKeys = text
  },
  setLogin (state, text) {
    state.islogin = text
  },
  setX5 (state, text) {
    state.isX5 = text
  },
  setAlertMsg (state, text) {
    state.alertMsg.status = text.status
    state.alertMsg.msg = text.msg
  }
}

export default mutations