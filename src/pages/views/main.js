import Vue from 'vue'
import View from './view.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(View)
}).$mount('#app')