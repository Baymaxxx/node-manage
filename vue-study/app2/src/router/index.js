import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/components/layout'
import Study from '@/components/study'
import todo from '@/components/templates/todo'
import flex from '@/components/templates/flex'
import chat from '@/components/templates/chat'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      name: 'Layout',
      path: '/',
      component: Layout,
      children: [{
        name: 'todo',
        path: '/todo/:id',
        component: todo,
      }]
    },
    {
      name: 'Study',
      path: '/study',
      component: Study,
      children: [{
        name: 'flex',
        path: 'flex',
        component: flex,
      }, {
        name: 'chat',
        path: 'chat',
        component: chat,
      }]
    },
  ]
});
// 路由拦截
// 是所有版块都需要鉴权,所以需要鉴权,我都会在路由meta添加添加一个字段requireLogin,设置为true的时候
router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireLogin)) {
    // 判断是否需要登录权限
    console.log(window.localStorage.getItem('loginUserBaseInfo'))
    if (window.localStorage.getItem('loginUserBaseInfo')) {
      // 判断是否登录
      let lifeTime =
        JSON.parse(window.localStorage.getItem('loginUserBaseInfo')).lifeTime *
        1000;
      let nowTime = (new Date()).getTime(); // 当前时间的时间戳
      if (nowTime < lifeTime) {
        next();
      } else {
        console.log({
          showClose: true,
          message: '登录状态信息过期,请重新登录',
          type: 'error'
        });
        next({
          path: '/login'
        });
      }
    } else {
      // 没登录则跳转到登录界面
      next({
        path: '/login'
      });
    }
  } else {
    next();
  }
})

export default router;
