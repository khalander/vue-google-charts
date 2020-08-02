import jsonChartData from '@/../static/report.json'

// initial state
const state = () => ({
  chartData: []  
})

// getters
const getters = {
  getChartData: (state) => {
    return state.chartData
  }
}

// actions
const actions = {
  setChartData ({ commit }) {
    commit('setChartData', {
      data: jsonChartData
    })
  }
}

// mutations
const mutations = {
  setChartData (state, { data }) {
    state.chartData = data
  },
}

export default {
  state,
  getters,
  actions,
  mutations
}
