<template>
    <div id="circle"></div>
  </template>
  
  <script>
  import * as d3 from "d3";
  
  export default {
    mounted() {
      const svg = d3
        .select("#circle")
        .append("svg")
        .attr("width", 100)
        .attr("height", 100);
  
      svg
        .append("circle")
        .attr("cx", 50)
        .attr("cy", 50)
        .attr("r", 20)
        .style("fill", "red");
    }
  };
  </script>
  