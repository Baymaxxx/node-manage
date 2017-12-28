import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import countNum from './modules/countNum'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        countNum,
        actions
    },
    strict: debug
})
