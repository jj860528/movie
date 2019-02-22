import Vue from "vue";
import Router from "vue-router";
import test from "@/components/test.vue";
import login from "@/components/login.vue";
import index from "@/components/index.vue";
import movie from "@/components/movie.vue";
import home from "@/components/home.vue";
import cinema from "@/components/cinema.vue";
import booking from "@/components/booking.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "index",
      component: index,
      children: [
        {
          path: "/",
          name: "home",
          component: home
        },
        {
          path: "/movie",
          name: "movie",
          component: movie
        },
        {
          path: "/cinema",
          name: "cinema",
          component: cinema
        },
        {
          path: "/booking",
          name: "booking",
          component: booking
        }
      ]
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
