import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/auth/Login.vue'
import adminDashboard from '../views/admin/Dashboard.vue'
import productList from '../views/admin/productList.vue'
import orderList from '../views/admin/orderList.vue'
import userDashboard from '../views/user/Dashboard.vue'
import productCart from '../views/user/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  } ,

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

  /*Admin Route End here*/
 
  /*User Route start here*/


  {
    path:'/user/dashboard',
    name:'userDashboard',
    component:userDashboard
  },

  
  {
    path:'/carts',
    name:'productCart',
    component:productCart
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
