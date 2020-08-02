<template>
  <div>
    <div class="div">
      <select v-model="selectedChart" class="selectbox">
        <option v-for="option in options" 
          :key="option.value" 
          :value="option.value">{{option.text}}</option>
      </select>
      <p class="selected-text">{{ selectedChart }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectBox",
  props: {
    options: { type: Array, required: true },
    defaultValue: {type: String, required: false }
  },
  data() {
    return {
      selectedChart: this.defaultValue
    };
  },
  watch: {
    selectedChart() {
      this.$emit("input", this.selectedChart);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.selected-text {
  font-weight: bold;
  font-family: Arial;
  left: 80px;
  top: 20px;
}
.selectbox {
  float: left;
  font-family: Arial;
}
.div {
  width: 30%;
}
</style>
