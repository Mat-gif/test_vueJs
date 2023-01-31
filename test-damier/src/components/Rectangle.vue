<template>
    <div id="rectangle" ></div>
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
      const svg = this.svg
      var last = null;
        for (let i = 0; i < 9; i++) {
            for(let j=0; j < 9; j++) {
            svg
            .append("rect")
            .attr("x", i*50)
            .attr("y", j*50)
            .attr("width", 40)
            .attr("height", 40)
            .attr("id", "("+i*50+", "+j*50+")")
            .style("fill", "blue")
            .on("click", function() {
              const rect = d3.select(this);
              rect.style("fill", rect.style("fill") === "blue" ? "red" : "blue");
              if(last !== null){
                    const rect = d3.select(last);
                    rect.style("fill", rect.style("fill") === "blue" ? "red" : "blue");
                }
                last = this;
            })
        }
      }

    }
  };
  </script>