<template>
    <div id="rectangle"></div>
  </template>
  
  <script>
  import * as d3 from "d3";
  
  export default {
   
    mounted() {
      const svg = d3
        .select("#rectangle")
        .append("svg")
        .attr("width", 1000)
        .attr("height", 1000);

        var last = null;
        for (let i = 0; i < 9; i++) {
            for(let j=0; j < 9; j++) {
            svg
            .append("rect")
            .attr("x", i*50)
            .attr("y", j*50)
            .attr("width", 40)
            .attr("height", 40)
            .attr("id", "rect"+i)
            .style("fill", "blue")
            .on("click", function() {
                console.log(this.id);
                const rect = d3.select(this);
                rect.style("fill", rect.style("fill") === "blue" ? "red" : "blue");
                if(last !== null){
                    const rect = d3.select(last);
                    rect.style("fill", rect.style("fill") === "blue" ? "red" : "blue");
                }
                last = this;
            });
        }
        }


           
      
    }
  };
  </script>