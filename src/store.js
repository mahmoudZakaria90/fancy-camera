import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    file: null,
    cameraCoords: {
      x: 0,
      y: 0
    }
  },
  mutations: {
    updateFile(state, payload) {
      state.file = payload;
    },
    setCameraCoords(state, payload) {
      const { x, y } = payload;
      state.cameraCoords = {
        x,
        y
      };
    }
  },
  actions: {
    updateFile(context, payload) {
      context.commit("updateFile", payload);
    },
    setCameraCoords(context, payload) {
      context.commit("setCameraCoords", payload);
    }
  }
});
