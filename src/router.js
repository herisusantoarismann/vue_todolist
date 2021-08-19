import { createRouter, createWebHistory } from "vue-router";
import todos from "./components/todos.vue";
import HelloWorld from "./components/HelloWorld.vue";

const routes = [
  {
    path: "/",
    component: HelloWorld,
  },
  {
    path: "/todo",
    component: todos,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
