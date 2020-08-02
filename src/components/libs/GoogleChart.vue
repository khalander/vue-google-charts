<template>
  <div>
    <GChart
      :type="type"
      :data="data"
      :options="options"
    />
  </div>
</template>

<script>

import { GChart } from 'vue-google-charts'

export default {
  name: 'GoogleChart',
  props: {
    type: {type: String, required: true},
    data: {type: Array, required: true},
    options: {type: Object, required: false}, 
  },
  components: {
    GChart
  },
}
</script>
