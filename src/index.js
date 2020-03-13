import Component from './Component.vue'
import PluginStore from './store'
import './scss/index.scss'

export default function(Vue, store) {
  // Register Vuex store
  if (!store) throw new Error('A Vuex store is required by the x5Modal plugin')
  store.registerModule('x5/m', PluginStore)
  // Register component
  Vue.component('x5Modal', Component)
  // Register modal commands
  Vue.prototype.$openModal = (name, data = null) => {
    // Give modal a promise to fulfill
    let resolve
    const promise = new Promise(res => (resolve = res))
    // Save modal
    store.dispatch('x5/m/add', { name, data, resolve })
    // Return promise
    return promise
  }
  Vue.prototype.$closeModal = (name, result) => {
    let modal = store.getters['x5/m/allOpen'].find(e => e.name === name)
    modal.resolve(result)
    store.dispatch('x5/m/remove', name)
  }
}
