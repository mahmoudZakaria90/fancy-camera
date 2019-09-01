import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    file: {
      blob: null
    }
  },
  mutations: {
    uploadFile(state, payload) {
      state.file.blob = payload;
    }
  },
  actions: {
    uploadFile(context, payload) {
      context.commit("uploadFile", payload);
    }
  }
});
