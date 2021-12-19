import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import adminDashboard from '../views/admin/Dashboard.vue'
import productList from '../views/admin/productList.vue'
import orderList from '../views/admin/orderList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/login',
    name: 'Login',
    component:Login
  },

  //Admin route start here
  {
    path:'/admin/dashboard',
    name:'adminDashboard',
    component:adminDashboard
  },

  {
    path:'/admin/products',
    name:'productLists',
    component:productList
  },

  {
    path:'/admin/orders',
    name:'orderLists',
    component:orderList
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
