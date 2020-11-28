import Vue from 'vue'
import VueRouter from 'vue-router'
import Portfolio from '@/views/Portfolio.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 })
})

export default router
