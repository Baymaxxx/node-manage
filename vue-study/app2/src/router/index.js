import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Article from '../components/Article'
import Vue1 from '../md/articles/vue1'
import Vue2 from '../md/articles/vue2'
import Vue3 from '../md/articles/vue3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home
    },
    {
      name: 'Article',
      path: '/article',
      component: Article,
      children: [
        {
          name: 'vue1',
          path: 'vue1',
          component: Vue1
        },
        {
          name: 'vue2',
          path: '/article/vue2',
          component: Vue2
        },
        {
          name: 'vue3',
          path: 'vue3',
          component: Vue3
        }
      ]
    }
  ]
})
