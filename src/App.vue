<template>
  <div id="app">
    <metric-line-chart />
  </div>
</template>

<script>
import MetricLineChart from './components/MetricLineChart.vue'

export default {
  name: 'App',
  components: {
    MetricLineChart
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
