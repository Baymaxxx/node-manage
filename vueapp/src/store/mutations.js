import * as types from './mutation-types'

const mutations = {
    [types.SET_SEARCH_HISTORY](state, history) {
        state.searchHistory = history
    },
    [types.SET_PLAY_HISTORY](state, history) {
        state.history = history
    },
    [types.SET_USER_SEX](state, usersex) {
        state.usersex = usersex
    },
    [types.SET_FAVORITE_LIST](state, list) {
        state.favoriteList = list
    }
}

export default mutations
