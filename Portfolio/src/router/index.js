import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/Home.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/404",
      name:"404",
      component: () => import("../views/NotFound.vue")
    }
  ]
})

export default router
