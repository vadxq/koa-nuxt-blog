import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'

import '..\\assets\\style\\app.styl'

import '..\\assets\\style\\main.css'

import '..\\node_modules\\quill\\dist\\quill.snow.css'

import '..\\node_modules\\quill\\dist\\quill.bubble.css'

import '..\\node_modules\\quill\\dist\\quill.core.css'

import '..\\static\\skins\\ui\\oxide\\skin.min.css'

import '..\\static\\skins\\ui\\oxide\\content.min.css'

import '..\\static\\skins\\content\\default\\content.min.css'

import _6f6c098b from '..\\layouts\\default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"清竹茶馆博客-vadxq","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width,minimum-scale=1,maximum-scale=1,user-scalable=no"},{"hid":"keywords","name":"keywords","content":"vadxq,清竹茶馆,宇许清竹,清竹博客,vadxq.com,blog.vadxq.com"},{"name":"format-detection","content":"telephone=no"},{"hid":"description","name":"description","content":"清竹茶馆博客：vadxq的个人博客，欢迎来到宇许清竹的清竹茶馆小窝~"},{"name":"renderer","content":"webkit"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"清竹茶馆博客"},{"hid":"author","name":"author","content":"vadxq"},{"hid":"theme-color","name":"theme-color","content":"#009688"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"清竹茶馆博客"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"清竹茶馆博客"},{"hid":"og:description","name":"og:description","property":"og:description","content":"vadxq的清竹茶馆博客"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"https:\u002F\u002Fqnimg.vadxq.com\u002Fblog\u002F2017\u002Flogo.jpg"},{"rel":"stylesheet","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:300,400,500,700|Material+Icons"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.f84f3cc4.json"},{"rel":"shortcut icon","href":"https:\u002F\u002Fqnimg.vadxq.com\u002Fblog\u002F2017\u002Flogo.jpg"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.9mld2VBMsQ$.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,
      transitionEl
    ])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this
      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },
  components: {
    NuxtLoading
  }
}
