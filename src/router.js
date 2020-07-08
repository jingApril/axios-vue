import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home

  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./views/About.vue')
  },
  {
    path: '/2-2',
    name:  'axios请求方法',
    component: () => import('./views/2-2.vue')
  },
  {
    path: '/2-3',
    name: 'axios并发请求',
    component: () => import('./views/2-3.vue')
  },
  {
    path: '/list',
    name: '联系人列表',
    component: () => import('./views/ContactList.vue')
  },
  {
    path: '/list2',
    name: '联系人列表',
    component: () => import('./views/ContactList2.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router