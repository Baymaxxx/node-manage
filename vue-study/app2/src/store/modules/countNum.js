import * as types from '../types';
import axios from 'axios';

const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';

const state = {
    projects: []
};

const getters = {
    openProjects: state => {
        return state.projects;
    }
};

const mutations = {
    // ADD_COUNT: state => state.count++;
    [types.SET_PROJECT_LIST](state, { list }) {
        console.log(list);
        state.projects = list;
    },
};

const actions = {
    loadProjectList: ({ commit }) => {
        axios.get(API_PROXY + 'https://zhuanlan.zhihu.com/api/columns/NewsFlash/posts?limit=20')
            .then((res) => {
                console.log(res.data);
                commit(types.SET_PROJECT_LIST, { list: res.data })
            }, (err) => {
                console.log(err);
            })
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
