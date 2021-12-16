import { createRouter, createWebHistory } from "vue-router";

import ToursList from "./pages/tours/ToursList.vue";
import TourDetail from "./pages/tours/TourDetail.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/tours" },
    { path: "/tours", component: ToursList },
    { path: "/tours/:id", component: TourDetail },
  ],
});

export default router;
