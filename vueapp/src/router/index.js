import Vue from 'vue'
import Router from 'vue-router'

import home from '../page/home'
import movie from '../page/movie'
import book from '../page/book'
import radio from '../page/radio'
import team from '../page/team'
import nav from '../page/nav'
import reg from '../page/reg'
import login from '../page/login'
import infonews from '../page/infonews'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/movie',
      name: 'movie',
      component: movie
    },
    {
      path: '/book',
      name: 'book',
      component: book
    },
    {
      path: '/radio',
      name: 'radio',
      component: radio
    },
    {
      path: '/team',
      name: 'team',
      component: team
    },
    {
      path: '/nav',
      name: 'nav',
      component: nav
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/infonews/:id',
      name: 'infonews',
      component: infonews
    },
    {
      path: '/*',
      redirect:"/home"
    }
  ]
})
