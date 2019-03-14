const mutations = {
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
  }
}

export default mutations