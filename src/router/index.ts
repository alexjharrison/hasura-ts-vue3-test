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
    path: "/todos",
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
  console.log({ to, from, next });
  next();
});

export default router;
