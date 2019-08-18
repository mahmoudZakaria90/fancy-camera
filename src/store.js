import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    file: {
      file: null,
      offsetLeft: 0,
      offsetTop: 0
    }
  },
  mutations: {
    uploadFile(state, payload) {
      state.file.file = payload;
    },
    setImgOffset(state, payload) {
      const { offsetLeft, offsetTop } = payload
      state.file.offsetLeft = offsetLeft;
      state.file.offsetTop = offsetTop;
    }
  },
  actions: {
    uploadFile(context, payload) {
      context.commit("uploadFile", payload);
    },
    setImgOffset(context, payload) {
      context.commit('setImgOffset', payload)
    }
  }
});
