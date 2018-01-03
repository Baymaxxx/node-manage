import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
// import Article from '../components/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Layout',
      path: '/',
      component: Layout
    },
    // {
    //   name: 'Article',
    //   path: '/article',
    //   component: Article,
    //   children: [
    //     {
    //       name: 'vue1',
    //       path: '/article/vue1',
    //       component: Vue1
    //     },
    //     {
    //       name: 'vue2',
    //       path: '/article/vue2',
    //       component: Vue2
    //     },
    //     {
    //       name: 'vue3',
    //       path: '/article/vue3',
    //       component: Vue3
    //     }
    //   ]
    // }
  ]
})
