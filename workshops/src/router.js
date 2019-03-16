import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/score',
      name: 'score',
      component: () => import('@/views/Score.vue')
    },
    {
      path: '/settings',
      name: 'userSettings',
      component: () => import('@/views/Settings.vue')
    },
    {
      path: '/vote',
      name: 'userVote',
      component: () => import('@/views/Vote.vue')
    }
  ]
})
