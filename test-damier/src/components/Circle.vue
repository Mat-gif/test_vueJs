<template>
  <div id="circle"  ></div>
</template>

<script>
import * as d3 from "d3";
export default {
  props: {
    svg: {
      type: Object,
      required: true
    }
  },
  mounted() {
    this.svg
      .append("circle")
      .attr("cx", 220)
      .attr("cy", 420)
      .attr("r", 20)
      .style("fill", "green")
      .on("click", function() {
        const pion = d3.select(this);
        pion.style("fill", pion.style("fill") === "green" ? "yellow" : "green");
      })
  }
};
</script>


