import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// ------------------------------
// x5-notify plugin install START
// ------------------------------
import x5Modal from '../src'
Vue.use(x5Modal, store)
// ------------------------------
// x5-notify plugin install END
// ------------------------------

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
