import * as types from './mutation-types'

// import {playMode} from '~/js/config'
import {savePlay, delPlay, saveFavorite, deleteFavorite} from '~/js/cache'

export const savePlayHistory = ({commit}, song) => {
    commit(types.SET_FAVORITE_LIST, savePlay(song))
}

export const delPlayHistory = ({commit}, song) => {
    commit(types.SET_FAVORITE_LIST, delPlay(song))
}

export const saveFavoriteList = ({commit}, song) => {
    commit(types.SET_FAVORITE_LIST, saveFavorite(song))
}

export const deleteFavoriteList = ({commit}, song) => {
    commit(types.SET_FAVORITE_LIST, deleteFavorite(song))
}

