const store = {
  namespaced: true,
  state: {
    modals: [],
  },
  getters: {
    active: state => (state.modals.length > 0 ? state.modals[0].name : null),
    allOpen: state => state.modals,
  },
  mutations: {
    ADD: (state, payload) => state.modals.unshift(payload),
    REMOVE: (state, payload) => (state.modals = state.modals.filter(e => e.name !== payload)),
    REMOVEOPEN: state => state.modals.splice(0, 1),
  },
  actions: {
    add: ({ commit }, { name, data, resolve }) => commit('ADD', { name, data, resolve }),
    remove: ({ commit }, payload) => (!payload ? commit('REMOVEOPEN') : commit('REMOVE', payload)),
  },
}

export default store
