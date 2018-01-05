const state = {
    showDagger: true, // 定义一个状态
}

const getters = {
    showDagger: state => {
        return state.showDagger
    }
}

const mutations = {
    daggerCtrl(state) {
        state.showDagger = !state.showDagger;
    }
}

const actions = {
    changeDagger: ({commit}) => {
        commit('daggerCtrl')
    }
}

export default {
    state,
    mutations,
    getters,
    actions
}
