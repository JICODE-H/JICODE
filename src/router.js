import { createWebHistory, createRouter } from "vue-router";
import development from './components/development.vue';
import Home from './components/Home.vue';


const routes = [
  {
    path: "/development",
    component: development,
  },
  {
    path: "/",
    component: Home,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 