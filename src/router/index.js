import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/Hello'
// 引入创建的四个页面
import Home from '@/Home'
import Category from '@/Category'
import Cart from '@/Cart'
import Me from '@/Me'
import BookDetail from '@/BookDetail'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
      children:
      [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'categories',
          name: 'Categories',
          component: Category
        },
        {
          path: 'cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: 'me',
          name: 'Me',
          component: Me
        }
      ]
    },
    {
      name: 'BookDetail',
      path: '/books:id',
      components: BookDetail
    }
  ],
  linkActiveClass: 'active',
  mode: 'history',
  base: __dirname
})
