import Vue from 'vue'
import App from './App'
import router from './router'//会自动扫描index文件

Vue.config.productionTip = false



new Vue({
  el: '#app',
  // 配置路由
  router,
  components: { App },
  template: '<App/>'
})
