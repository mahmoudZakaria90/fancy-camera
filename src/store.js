import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    file: {
      blob: null
    },
    camera: {
      width: 250,
      height: 250
    }
  },
  getters: {
    cameraSize(state) {
      return state.camera;
    }
  },
  mutations: {
    uploadFile(state, payload) {
      state.file.blob = payload;
    },
    setWidth(state, payload) {
      state.camera.width = payload;
    },
    setHeight(state, payload) {
      state.camera.height = payload;
    }
  },
  actions: {
    uploadFile(context, payload) {
      context.commit("uploadFile", payload);
    },
    setWidth(context, payload) {
      context.commit("setWidth", payload);
    },
    setHeight(context, payload) {
      context.commit("setHeight", payload);
    }
  }
});
