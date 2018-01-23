import storage from 'good-storage'

export function loadSearch() {
    return storage.get('SEARCH_KEY', [])
}

export function loadPlay() {
    return storage.get('PLAY_KEY', [])
}

export function savePlay(song) {
    return storage.set('PLAY_KEY', song)
}

export function delPlay(song) {
    return storage.remove('PLAY_KEY', [])
}

export function loadFavorite() {
    return storage.get('FAVORITE_KEY', [])
}

export function saveFavorite(song) {
    return storage.set('FAVORITE_KEY', song)
}

export function deleteFavorite() {
    return storage.remove('FAVORITE_KEY', [])
}
