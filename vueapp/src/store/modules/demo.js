import * as types from '../mutation-types'
import axios from 'axios'

const API_PROXY = 'https://bird.ioliu.cn/v1/?url='

const state = {
  projects: [],
  count: 1
}

const getters = {
  openProjects: state => {
    return state.projects
  },
  getCount: state => {
    return state.count
  }
}

const mutations = {
    // ADD_COUNT: state => state.count++;
  [types.SET_PROJECT_LIST](state, { list }) {
    state.projects = list
  }
}

const actions = {
  loadProjectList: ({ commit }) => {
    axios.get(API_PROXY + 'https://zhuanlan.zhihu.com/api/columns/NewsFlash/posts?limit=1')
            .then((res) => {
              commit(types.SET_PROJECT_LIST, { list: res.data })
            }, (err) => {
              console.log(err)
            })
  }
}

export default {
  state,
  mutations,
  getters,
  actions
}
