import Vue from 'vue'
import { wrapFunctional } from './index'

const components = {
  PicachuWelcome: () => import('../..\\components\\PicachuWelcome.vue' /* webpackChunkName: "components/picachu-welcome" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
