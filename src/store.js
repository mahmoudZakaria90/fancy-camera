import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    file: null
  },
  mutations: {
    updateFile(state, payload) {
      state.file = payload;
    }
  },
  actions: {
    updateFile(context, payload) {
      context.commit("updateFile", payload);
    }
  }
});
