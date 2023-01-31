<template>
  <div>
    <Rectangle :svg="svg" />
    <Circle :svg="svg"/>
  </div>
</template>

<script>
import Circle from "./components/Circle.vue";
import Rectangle from "./components/Rectangle.vue";
import * as d3 from "d3";

export default {
  components: {
    Circle,Rectangle
  },
  data() {
    return {
      svg: d3.select("#app")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 1000),
    }
  }
}
</script>

