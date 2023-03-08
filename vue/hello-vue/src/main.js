// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue, { h } from 'vue'
import Element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App'

import router from './router'

import axios from 'axios'
import vueAxios from 'vue-axios'

Vue.config.productionTip = false

Vue.use(router)
Vue.use(Element)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render:h =>h(App)
})
