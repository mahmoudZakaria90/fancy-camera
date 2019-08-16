import Vue from "vue";
import App from "./App.vue";
import "normalize.css";
import store from "./store";
import router from "./router";
Vue.config.productionTip = false;

export const bus = new Vue();

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
