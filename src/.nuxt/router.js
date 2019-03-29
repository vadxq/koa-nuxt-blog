import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _352b91b0 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages_admin_index" */))
const _618d2ca8 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages_login" */))
const _74ce1036 = () => interopDefault(import('..\\pages\\me.vue' /* webpackChunkName: "pages_me" */))
const _fd42b4a6 = () => interopDefault(import('..\\pages\\post.vue' /* webpackChunkName: "pages_post" */))
const _0fe5089f = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages_test" */))
const _1e5b7fd0 = () => interopDefault(import('..\\pages\\admin\\_id.vue' /* webpackChunkName: "pages_admin__id" */))
const _04658911 = () => interopDefault(import('..\\pages\\article\\_id.vue' /* webpackChunkName: "pages_article__id" */))
const _0591c695 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual'

    // reset scrollRestoration to auto when leaving page, allowing page reload
    // and back-navigation from other pages to use the browser to restore the
    // scrolling position.
    window.addEventListener('beforeunload', () => {
      window.history.scrollRestoration = 'auto'
    })

    // Setting scrollRestoration to manual again when returning to this page.
    window.addEventListener('load', () => {
      window.history.scrollRestoration = 'manual'
    })
  }
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected and scrollToTop is not explicitly disabled
  if (
    to.matched.length < 2 &&
    to.matched.every(r => r.components.default.options.scrollToTop !== false)
  ) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: decodeURI('/'),
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/admin",
      component: _352b91b0,
      name: "admin"
    }, {
      path: "/login",
      component: _618d2ca8,
      name: "login"
    }, {
      path: "/me",
      component: _74ce1036,
      name: "me"
    }, {
      path: "/post",
      component: _fd42b4a6,
      name: "post"
    }, {
      path: "/test",
      component: _0fe5089f,
      name: "test"
    }, {
      path: "/admin/:id",
      component: _1e5b7fd0,
      name: "admin-id"
    }, {
      path: "/article/:id?",
      component: _04658911,
      name: "article-id"
    }, {
      path: "/",
      component: _0591c695,
      name: "index"
    }],

    fallback: false
  })
}
