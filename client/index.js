import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './app.vue'
import createRouter from './router'
import createStore from './store/index'

import 'common/stylus/reset.styl'
import 'common/stylus/responsive.styl'
import 'common/stylus/index.styl'


Vue.use(VueRouter)
Vue.use(Vuex)

const router = createRouter()
const store = createStore()

router.beforeEach((to, from, next) => {
  if (to.path) {
    _hmt.push(['_trackPageview', '/#' + to.fullPath])
  }
  next()
})

let isMobile = navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i) != null;
if (isMobile) {
  window.location.href = "https://m.chinko.cc"
}


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')