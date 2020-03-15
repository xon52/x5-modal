const store = {
  namespaced: true,
  state: {
    registered: {},
    open: [],
  },
  getters: {
    active: state => (state.open.length > 0 ? state.open[state.open.length - 1].name : null),
    allOpen: state => state.open,
    allRegistered: state => state.registered,
  },
  mutations: {
    OPEN: (state, { name, options, resolve }) =>
      state.open.push({ name, options, resolve, component: state.registered[name] }),
    CLOSE: (state, payload) => (state.open = state.open.filter(e => e.name !== payload)),
    REGISTER: (state, { name, component }) => (state.registered[name] = component),
  },
  actions: {
    register: ({ commit }, payload) => commit('REGISTER', payload),
    open: ({ commit }, payload) => commit('OPEN', payload),
    close: ({ commit }, payload) => commit('CLOSE', payload),
  },
}

export default store
