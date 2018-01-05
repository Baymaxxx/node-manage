import Vue from 'vue'
import Vuex from 'vuex'
import countNum from './modules/countNum'
import test from './modules/test'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        countNum,
        test
    },
    strict: debug
})
