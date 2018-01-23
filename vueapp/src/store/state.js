// import { playMode } from '~/js/config'
import { loadSearch, loadPlay, loadFavorite } from '~/js/cache'

const state = {
    searchHistory: loadSearch(),
    playHistory: loadPlay(),
    favoriteList: loadFavorite()
}

export default state
