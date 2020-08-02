<template>
  <div>
    <select-box 
      :options="selectBoxOptions" 
      :default-value="selectedChart"
      @input="(value) => {selectedChart = value}" />

    <google-chart 
      type="LineChart" 
      :data="getChartData" 
      :options="getChartOptions" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import map from "lodash/map";
import zip from "lodash/zip";
import GoogleChart from "./libs/GoogleChart.vue";
import SelectBox from "./libs/SelectBox.vue";

export default {
  name: "MetricLineChart",
  components: {
    GoogleChart,
    SelectBox
  },
  mounted() {
    this.$store.dispatch("setChartData");
  },
  data() {
    return {
      selectedChart: "sales"
    };
  },
  computed: {
    ...mapGetters({
      chartData: "getChartData"
    }),
    getChartOptions() {
      return {
        pointSize: 5,
        width: 900,
        height: 500,
        legend: { position: "top", alignment: "center" }
      };
    },
    getDates() {
      return map(this.chartData.records, "date", []);
    },
    getOverallSales() {
      return [
        ["Year", "Sales"],
        ...zip(this.getDates, map(this.chartData.records, "sales", []))
      ];
    },
    getOverallOrder() {
      return [
        ["Year", "Orders"],
        ...zip(this.getDates, map(this.chartData.records, "orders", []))
      ];
    },
    getPageViews() {
      return [
        ["Year", "Page views"],
        ...zip(this.getDates, map(this.chartData.records, "pageViews", []))
      ];
    },
    getClickThruRate() {
      return [
        ["Year", "Click thru rate"],
        ...zip(this.getDates, map(this.chartData.records, "clickThruRate", []))
      ];
    },
    getChartData() {
      switch (this.selectedChart) {
        case "sales":
          return this.getOverallSales;
        case "orders":
          return this.getOverallOrder;
        case "pageViews":
          return this.getPageViews;
        case "clickThruRate":
          return this.getClickThruRate;
        default:
          return this.getOverallSales;
      }
    },
    selectBoxOptions() {
      return [
        { value: "sales", text: "Overall sales" },
        { value: "orders", text: "Overall orders" },
        { value: "pageViews", text: "Page views" },
        { value: "clickThruRate", text: "Page rec clickThru Rate" }
      ];
    }
  }
};
</script>
