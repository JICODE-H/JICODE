import { createWebHistory, createRouter } from "vue-router";
import development from './components/development.vue';
import Home from './components/Home.vue';
import portfolio from './components/portfolio.vue';
import contact from './components/contact.vue';


const routes = [
  {
    path: "/contact",
    component: contact,
  },
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