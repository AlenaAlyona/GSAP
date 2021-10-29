import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/reveal",
    name: "Reval",
    component: () => import("../views/basics/Reveal.vue"),
  },
  {
    path: "/loader",
    name: "Loader",
    component: () => import("../views/basics/Loader.vue"),
  },
  {
    path: "/countdown",
    name: "Countdown",
    component: () => import("../views/basics/Countdown.vue"),
  },
  {
    path: "/slider",
    name: "Slider",
    component: () => import("../views/basics/Slider.vue"),
  },
  {
    path: "/multiple",
    name: "Multiple",
    component: () => import("../views/scroll/Multiple.vue"),
  },
  {
    path: "/pin",
    name: "Pin",
    component: () => import("../views/scroll/Pin.vue"),
  },
  {
    path: "/rocket",
    name: "Rocket",
    component: () => import("../views/scroll/Rocket.vue"),
  },
  {
    path: "/image",
    name: "Image",
    component: () => import("../views/scroll/Image.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
