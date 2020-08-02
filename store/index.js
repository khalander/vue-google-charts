import Vue from 'vue'
import Vuex from 'vuex'
import lineChart from './modules/lineChart'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    lineChart
  }
})
