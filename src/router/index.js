import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/basics",
    name: "Basics",
    component: () => import("../views/Basics.vue"),
  },
  {
    path: "/reveal",
    name: "Reval",
    component: () => import("../views/Reveal.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
