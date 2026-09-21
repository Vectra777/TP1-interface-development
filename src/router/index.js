import { createRouter, createWebHistory } from 'vue-router'
import { store } from '../store'
import Accueil from '../views/Accueil.vue'
import Articles from '../views/Articles.vue'
import ArticleDetail from '../views/ArticleDetail.vue'
import Ajouter from '../views/Ajouter.vue'
import PanierPage from '../views/PanierPage.vue'
import Login from '../views/Login.vue'
import Admin from '../views/Admin.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Accueil },
    { path: '/articles', component: Articles },
    { path: '/article/:id', component: ArticleDetail },
    { path: '/ajouter', component: Ajouter },
    { path: '/panier', component: PanierPage },
    { path: '/login', component: Login },
    { path: '/admin', component: Admin, meta: { requiresAuth: true } },
  ],
})

router.beforeEach((to) => {
  if (to.meta.requiresAuth && !store.user) {
    return { path: '/login', query: { redirect: to.fullPath } }
  }
})

export default router
