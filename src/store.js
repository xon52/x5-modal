const store = {
  namespaced: true,
  state: {
    registered: {},
    open: [],
    loading: [],
  },
  getters: {
    loading: (state) => state.loading.length > 0,
    active: (state) => (state.open.length > 0 ? state.open[state.open.length - 1].name : null),
    allOpen: (state) => state.open,
    allRegistered: (state) => state.registered,
  },
  mutations: {
    OPEN: (state, { name, options, data, resolve }) => {
      let component = state.registered[name]
      state.open.push({ name, options, data, resolve, component })
    },
    EDIT: (state, { name, options, data }) => {
      let i = state.open.findIndex((e) => e.name === name)
      let _options = { ...state.open[i].options, ...options }
      let _data = data ? data : state.open[i].data
      state.open.splice(i, 1, { ...state.open[i], options: _options, data: _data })
    },
    LOADED: (state, payload) => (state.loading = state.loading.filter((e) => e !== payload)),
    LOADING: (state, payload) => state.loading.push(payload),
    CLOSE: (state, payload) => (state.open = state.open.filter((e) => e.name !== payload)),
    REGISTER: (state, { name, component }) => (state.registered[name] = component),
  },
  actions: {
    register: ({ commit }, payload) => commit('REGISTER', payload),
    open: ({ commit }, payload) => {
      commit('OPEN', payload)
      commit('LOADING', `${payload.name}-component`)
    },
    edit: ({ commit }, payload) => commit('EDIT', payload),
    close: ({ commit }, payload) => commit('CLOSE', payload),
    loading: ({ commit }, payload) => commit('LOADING', payload),
    loaded: ({ commit }, payload) => commit('LOADED', payload),
  },
}

export default store
