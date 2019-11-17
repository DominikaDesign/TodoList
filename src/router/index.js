import Vue from "vue";
import VueRouter from "vue-router";
import mainpage from "@/views/mainpage.vue";
import home from "@/views/home.vue";
import work from "@/views/work.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "mainpage",
    component: mainpage
  },
  {
    path: "/home",
    name: "home",
    component: home
  },
  {
    path: "/work",
    name: "work",
    component: work
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
