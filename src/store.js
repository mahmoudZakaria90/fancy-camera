import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    file: null
  },
  mutations: {
    updateFile(state) {
      return state.file;
    }
  }
});
