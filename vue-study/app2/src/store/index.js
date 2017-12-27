import Vue from 'vue'
import Vuex from 'vuex'

import status from './modules/status'
import demo from './modules/demo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        status,
        demo
    },
    strict: debug
})
