import Component from './Component.vue'
import Modal from './Modal.vue'
import PluginStore from './store'
import './scss/index.scss'

const warning = message => {
  if (process.env.NODE_ENV === 'production') return
  console.warn(`[x5Modal WARN]: ${message}`)
}

// Install
export default function(Vue, store) {
  // Register Vuex store
  if (!store) throw new Error('A Vuex store is required by the x5Modal plugin')
  store.registerModule('x5/m', PluginStore)
  // Register component
  Vue.component('x5Modal', Modal)
  Vue.component('x5Modals', Component)

  // Close any close-able modals when the parent component is destroyed
  Vue.mixin({
    beforeDestory() {
      closeModals()
    },
  })

  // Register Modal
  const registerModal = (name, component) => {
    const isRegistered = !!store.getters['x5/m/allRegistered'][name]
    if (isRegistered) warning(`Modal '${name}' already registered; it will be replaced.`)
    store.dispatch('x5/m/register', { name, component })
  }
  // Open Modal
  const openModal = (name, options = {}, data = null) => {
    const isRegistered = !!store.getters['x5/m/allRegistered'][name]
    if (!isRegistered) return warning(`Modal '${name}' not registered.`)
    const isOpen = !!store.getters['x5/m/allOpen'].find(e => e.name === name)
    // FIXME: returning null throws an error if there is a .then() chained to the openModal() call
    if (isOpen) return warning(`Modal '${name}' already open.`)
    let resolve
    const promise = new Promise(res => (resolve = res))
    store.dispatch('x5/m/open', { name, options, data, resolve })
    return promise
  }
  // Edit Modal
  const editModal = (name, options = {}, data = null) => {
    const isOpen = !!store.getters['x5/m/allOpen'].find(e => e.name === name)
    if (!isOpen) return warning(`Modal '${name}' cannot be edited until it is open.`)
    store.dispatch('x5/m/edit', { name, options, data })
  }
  // Close Modal
  const closeModal = (name, result) => {
    if (!name) name = store.getters['x5/m/active']
    let modal = store.getters['x5/m/allOpen'].find(e => e.name === name)
    if (!modal) return warning(`Modal '${name}' not found.`)
    modal.resolve(result)
    store.dispatch('x5/m/close', name)
  }
  // Close Modals
  const closeModals = () => {
    store.getters['x5/m/allOpen'].filter(e => e.options.keepOPen).forEach(e => {
      warning(`Modal '${e.name}' force closed.`)
      closeModal(e.name)
    })
  }

  // Vue commands
  Vue.prototype.$x5 = { ...Vue.prototype.$x5, registerModal, openModal, editModal, closeModal }
}
