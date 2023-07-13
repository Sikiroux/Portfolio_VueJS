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
      //Make a path so that every wrong path return to 404 error page
      path: "/:pathMatch(.*)*",
      name:"404",
      component: () => import("../views/NotFound.vue")
    }
  ]
})

export default router
