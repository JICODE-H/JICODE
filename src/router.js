import { createWebHistory, createRouter } from "vue-router";
import development from './components/development.vue';
import Home from './components/Home.vue';
import portfolio from './components/portfolio.vue';


const routes = [
  {
    path: "/portfolio",
    component: portfolio,
  },
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