import { createRouter, createWebHistory } from "vue-router";

import ToursList from "./pages/tours/ToursList.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/tours" },
    { path: "/tours", component: ToursList },
  ],
});

export default router;
