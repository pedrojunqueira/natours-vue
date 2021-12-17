import { createRouter, createWebHistory } from "vue-router";

import ToursList from "./pages/tours/ToursList.vue";
import TourDetail from "./pages/tours/TourDetail.vue";
import UserLogin from "./pages/users/UserLogin.vue";
import UserSignUp from "./pages/users/UserSignUp.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/tours" },
    { path: "/tours", component: ToursList },
    { path: "/tours/:id", component: TourDetail },
    { path: "/tours/login", component: UserLogin },
    { path: "/tours/sign_up", component: UserSignUp },
  ],
});

export default router;
