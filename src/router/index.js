import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
// 引入创建的四个页面
import Home from '@/components/Home'
import Category from '@/components/Category'
import Cart from '@/components/Cart'
import Me from '@/components/Me'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/category',
      name: 'Category',
      component: Category
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/me',
      name: 'Me',
      component: Me
    }
  ]
})
