import Vue from 'vue'
import WangEditor from 'wangeditor'

Object.defineProperty(Vue.prototype,'$eidtor',{value: WangEditor})

if (process.browser) {
    Vue.use(WangEditor)
}