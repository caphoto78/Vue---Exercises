import { createStore } from 'vuex';
import productsModule from './modules/products';
import cartModule from './modules/cart';

const store = createStore({
  modules: {
    products: productsModule,
    cart: cartModule
  },
  state() {
    return {
      isLoggedIn: false
    }
  },
  mutations: {
    login(state) {
      state.isLoggedIn = true;
    },
    logout(state) {
      state.isLoggedIn = false;
    }
  },
  actions: {
    login({ commit }) {
      commit('login');
    },
    logout({ commit }) {
      commit('logout');
    }

  },
  getters: {
    isLoggedIn(state) {
      return state.isLoggedIn;
    }
  }
})

export default store;