import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/RegisterScreen.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/LoginScreen.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/AdminScreen.vue")
  },
  {
    path: "/",
    name: "ViewTodos",
    component: () => import("../views/TodosScreen.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("../views/404.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("user_id");
  const isLoginOrRegister =
    to.fullPath === "/login" || to.fullPath === "/register";

  if (to.name === "NotFound") next();
  else if (isLoggedIn && isLoginOrRegister) {
    next("/");
  } else if (!isLoggedIn && !isLoginOrRegister) {
    next("/login");
  } else {
    next();
  }
});

export default router;
