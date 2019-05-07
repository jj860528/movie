import Vue from "vue";
import Router from "vue-router";
import login from "@/views/login.vue";
import index from "@/views/index.vue";
import movie from "@/views/movie.vue";
import home from "@/views/home.vue";
import cinema from "@/views/cinema.vue";
import booking from "@/views/booking.vue";
import select from "@/views/select.vue";
import admin from "@/views/admin.vue"
import chseat from "@/views/chseat.vue"
import managem from "@/views/managem.vue"
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
        },
        {
          path: "/select",
          name: "select",
          component: select
        }
      ]
    },
    {
      path: "/login",
      name: "login",
      component: login
    },
    {
      path: "/admin",
      name: "admin",
      component: admin,
      children: [
        {
          path: "/chseat",
          name: "chseat",
          component: chseat
        },
        {
          path: "/managem",
          name: "managem",
          component: managem
        }
      ]
    }
  ]
});
