import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Download from "./views/Download.vue";
import About from "./views/About.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/download",
      name: "download",
      component: Download
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
