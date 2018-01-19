import Vue from 'vue'
import Vuex from 'vuex'
import test from './modules/demo'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    test
  },
  strict: debug
})
