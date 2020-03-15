import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
// import x5Modal from '../dist'
import x5Modal from '../src'

Vue.use(Vuex)
const store = new Vuex.Store()

Vue.use(x5Modal, store)

new Vue({
  el: '#app',
  store: store,
  render: h => h(App),
})
