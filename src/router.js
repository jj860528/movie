import Vue from "vue";
import Router from "vue-router";
import test from "@/components/test.vue";
import login from "@/components/login.vue";
import index from "@/components/index.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path :"/",
      name :"index",
      component : index
    },
    {
      path: "/test",
      name: "test",
      component: test
    },
    {
      path: "/login",
      name: "login",
      component: login
    }
  ]
});
