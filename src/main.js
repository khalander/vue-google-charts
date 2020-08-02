import Vue from 'vue'
import App from './App.vue'
import store from './../store'
import VueGoogleCharts from 'vue-google-charts'

Vue.use(VueGoogleCharts)

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
