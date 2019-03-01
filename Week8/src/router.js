import Vue from 'vue'
import Router from 'vue-router'
import Start from './views/Start.vue'
import Game from './views/Game.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Start
    },
    {
      path: '/start',
      name: 'start',
      component: Game
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
