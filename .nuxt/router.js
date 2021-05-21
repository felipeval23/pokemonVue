import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _548e1bfa = () => interopDefault(import('..\\pages\\calendary.vue' /* webpackChunkName: "pages/calendary" */))
const _2ddeed1d = () => interopDefault(import('..\\pages\\pokedex.vue' /* webpackChunkName: "pages/pokedex" */))
const _6779e6be = () => interopDefault(import('..\\pages\\welcome.vue' /* webpackChunkName: "pages/welcome" */))
const _53b7c05e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/calendary",
    component: _548e1bfa,
    name: "calendary"
  }, {
    path: "/pokedex",
    component: _2ddeed1d,
    name: "pokedex"
  }, {
    path: "/welcome",
    component: _6779e6be,
    name: "welcome"
  }, {
    path: "/",
    component: _53b7c05e,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
