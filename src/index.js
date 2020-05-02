import Component from './Component.vue'
// TODO: Depreciated v0.4.0 2020/05/01
import LegacyModal from './LegacyModal.vue'
import PluginStore from './store.js'
import './scss/index.scss'

const warning = (message) => {
  if (process.env.NODE_ENV === 'production') return
  console.warn(`[x5Modal WARN]: ${message}`) // eslint-disable-line
}

// Install
export default function(Vue, store) {
  // Register Vuex store
  if (!store) throw new Error('A Vuex store is required by the x5Modal plugin')
  store.registerModule('x5/m', PluginStore)
  // Register component
  Vue.component('x5Modal', LegacyModal)
  Vue.component('x5Modals', Component)

  // Register Modal
  const registerModal = (name, component) => {
    const isRegistered = !!store.getters['x5/m/allRegistered'][name]
    if (isRegistered) warning(`Modal '${name}' already registered; it will be replaced.`)
    store.dispatch('x5/m/register', { name, component })
  }
  // Open Modal
  const openModal = (name, data = null, options = {}) => {
    const isRegistered = !!store.getters['x5/m/allRegistered'][name]
    if (!isRegistered) return warning(`Modal '${name}' not registered.`)
    // TODO: Legacy guard v0.4.0 2020/05/01
    if (data && (data.title || data.buttons))
      warning(`⚠️ x5-modal Plugin Warning :: v0.4.0 has swapped the order of data and options in the $x5.openModal() command. Please see
      <a href="https://github.com/xon52/x5-modal/blob/master/MIGRATION.md">here</a> for update instructions.`)
    const isOpen = !!store.getters['x5/m/allOpen'].find((e) => e.name === name)
    // FIXME: returning null throws an error if there is a .then() chained to the openModal() call
    if (isOpen) return warning(`Modal '${name}' already open.`)
    let resolve
    const promise = new Promise((res) => (resolve = res))
    store.dispatch('x5/m/open', { name, data, options, resolve })
    return promise
  }
  // Edit Modal
  const editModal = (name, data = null, options = {}) => {
    const isOpen = !!store.getters['x5/m/allOpen'].find((e) => e.name === name)
    if (!isOpen) return warning(`Modal '${name}' cannot be edited until it is open.`)
    store.dispatch('x5/m/edit', { name, data, options })
  }
  // Close Modal
  const closeModal = (name, result) => {
    if (!name) name = store.getters['x5/m/active']
    if (!name) return
    const modal = store.getters['x5/m/allOpen'].find((e) => e.name === name)
    if (!modal) return warning(`Modal '${name}' not found.`)
    modal.resolve(result)
    store.dispatch('x5/m/close', name)
  }
  // Close Modals
  const closeModals = () =>
    store.getters['x5/m/allOpen']
      .filter((e) => !e.options.keepOpen)
      .forEach((e) => {
        warning(`Modal '${e.name}' force closed.`)
        closeModal(e.name)
      })

  // Vue commands
  Vue.prototype.$x5 = {
    ...Vue.prototype.$x5,
    registerModal,
    openModal,
    editModal,
    closeModal,
    closeModals,
  }
}
