// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Config from './utils/config'
import Http from './utils/http'
Vue.config.productionTip = false

Vue.prototype.$config = Config
Vue.prototype.$http = new Http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
