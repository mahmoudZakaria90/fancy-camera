import Vue from "vue";
import Router from "vue-router";
import Dashboard from "./components/Dashboard";
import Tool from "./components/Tool/index";

Vue.use(Router);

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/tool",
    name: "tool",
    component: Tool
  }
];
export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});
