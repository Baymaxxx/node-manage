// import { playMode } from '~/js/config'
import { loadSearch, loadPlay, loadFavorite, loadUserSex } from '~/js/cache'

const state = {
    userSex: loadUserSex(),
    searchHistory: loadSearch(),
    playHistory: loadPlay(),
    favoriteList: loadFavorite()
}

export default state
