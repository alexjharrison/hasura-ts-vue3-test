import { useUser } from "@/composables/useUser";
import { watch } from "vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/admin",
    name: "Admin",
    component: () => import("../views/Admin.vue")
  },
  {
    path: "/",
    name: "ViewTodos",
    component: () => import("../views/ViewTodos.vue")
  },
  {
    path: "/todos/:id",
    name: "ViewTodo",
    component: () => import("../views/ViewTodo.vue")
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

  console.log(isLoggedIn);

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
