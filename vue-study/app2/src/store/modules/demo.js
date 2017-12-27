import * as types from '../types'
// 导入mutations的命名空间

const state = {
// 定义state
  demoFollow: false,
  // 这里模拟的是关注的状态，布尔值表示是否关注
  demoFollowPending: false
  // 是否在请求中(actions是否在执行异步操作)
}

const getters = {
// 定义getters, getters是对state的扩展，可以以state衍生出其他状态
  demoFollowStatus: state => state.demoFollow ? '已关注' : '未关注'
  // demoFollowStatus是demoFollow的衍生量，将原来的布尔值映射为'已关注' : '未关注'
}

const mutations = {
// 只有mutations才能操作改变state，mutations是同步执行的
// 所以有关异步的操作请放在actions里执行
  [types.DEMO__VUEX_FOLLOW] (state, status = NaN) {
  // 使用预定义好的名字来写mutations方法
    state.demoFollow = isNaN(status) ? !state.demoFollow : status
  },
  [types.DEMO__VUEX_FOLLOW_PENDING] (state, status = NaN) {
  // 这里对status传值做了审查，如没有传，则对要改变的布尔值进行取反操作
    state.demoFollowPending = isNaN(status) ? !state.demoFollowPending : status
  }
}

const actions = {
// actions是可以执行异步操作的，操作完毕后触发mutations里的方法去改变state的状态
  demoFollowAjax ({commit}, status) {
    commit(types.DEMO__VUEX_FOLLOW_PENDING)
    // 在异步操作前通过mutations告诉应用，现在正在进行异步操作
    setTimeout(() => {
      // 利用延时函数模拟异步的ajax操作
      commit(types.DEMO__VUEX_FOLLOW_PENDING)
      // commit 是在actions里用来触发mutations的方法
      // 告诉应用，异步操作结束
      commit(types.DEMO__VUEX_FOLLOW, status)
      // 为关注按钮赋予新的状态
    }, 2000)
  }
}

export default {
// 导出整个demo模块
  state,
  getters,
  actions,
  mutations
}
