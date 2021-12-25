import { createRouter, createWebHistory } from "vue-router";

import ToursList from "./pages/tours/ToursList.vue";
import TourDetail from "./pages/tours/TourDetail.vue";
import UserLogin from "./pages/users/UserLogin.vue";
import UserSignUp from "./pages/users/UserSignUp.vue";
import UserAccount from "./pages/users/UserAccount.vue";
import UserForgotPassword from "./pages/users/UserForgotPassword.vue";
import UserResetPassword from "./pages/users/UserResetPassword.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/tours" },
    { path: "/tours", component: ToursList },
    { path: "/tours/:id", component: TourDetail },
    { path: "/tours/login", component: UserLogin },
    { path: "/tours/sign_up", component: UserSignUp },
    { path: "/user/:id", component: UserAccount },
    { path: "/user/me", component: UserAccount },
    { path: "/forgot_password", component: UserForgotPassword },
    { path: "/reset_password/:reset_token", component: UserResetPassword },
  ],
});

export default router;
