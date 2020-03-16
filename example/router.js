import Vue from 'vue'
import Router from 'vue-router'
import RouteA from './RouteA.vue'
import RouteB from './RouteB.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '', alias: '/a', component: RouteA },
    { path: '/b', component: RouteB },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) return to.hash
    if (savedPosition) return savedPosition
    return { x: 0, y: 0 }
  },
})

export default router
