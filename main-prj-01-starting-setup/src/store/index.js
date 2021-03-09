import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index.js'

const store = createStore({
  modules: {
    coaches: coachesModule
  },
  state() {
    return {}
  },
  mutations: {},
  actions: {},
  getters: {}
})

export default store;