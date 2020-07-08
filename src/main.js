import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Http from './service/http'

Vue.config.productionTip = false
// 全局挂载，慎重，把Http挂载在Vue实例上
Vue.prototype.$Http = Http

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
