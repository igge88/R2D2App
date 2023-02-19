import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import StarAppView from "../views/StarAppView.vue";
import ExerciseAppView from "../views/ExerciseAppView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/R2D2App",
      name: "R2D2App",
      component: StarAppView,
    },
    {
      path: "/ExerciseApp",
      name: "ExerciseApp",
      component: ExerciseAppView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
  ],
});

export default router;
