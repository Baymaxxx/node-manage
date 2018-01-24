import * as types from './mutation-types'

// import {playMode} from '~/js/config'
import {savePlay, delPlay, saveFavorite, deleteFavorite, changeUserSexCa} from '~/js/cache'

export const savePlayHistory = ({commit}, song) => {
    commit(types.SET_FAVORITE_LIST, savePlay(song))
}

export const delPlayHistory = ({commit}, song) => {
    commit(types.SET_FAVORITE_LIST, delPlay(song))
}

export const changeUserSex = ({commit}, usersex) => {
    commit(types.SET_USER_SEX, changeUserSexCa(usersex))
}

export const saveFavoriteList = ({commit}, song) => {
    commit(types.SET_FAVORITE_LIST, saveFavorite(song))
}

export const deleteFavoriteList = ({commit}, song) => {
    commit(types.SET_FAVORITE_LIST, deleteFavorite(song))
}

