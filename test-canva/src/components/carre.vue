<template>
    <div @click="checkClick">
      <canvas ref="canvas" />
    </div>
  </template>
  
  <script>
  export default {
    name: "Carre",
    data() {
      return {
        shapes: []
      };
    },
    mounted() {
      this.draw();
    },
    created() {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                this.shapes.push({
                id: i,
                x: i * 50,
                y: j * 50,
                size: 40,
                color: "blue"
                });
            }
        }
    },
    methods: {
      checkClick(e) {
        const x = e.clientX;
        const y = e.clientY;
        const canvas = this.$refs.canvas;
        const rect = canvas.getBoundingClientRect();
        

        this.shapes.forEach(shape => {
            if (x >= shape.x + rect.left && x <= shape.x + rect.left + shape.size &&
                y >= shape.y + rect.top && y <= shape.y + rect.top + shape.size) {
            shape.color = shape.color === "red" ? "blue" : "red";
            this.draw();
            }
        });

      },
      changeColor() {
        this.color = this.color === "red" ? "blue" : "red";
        this.draw();
      },
      draw() {
        const canvas = this.$refs.canvas;
        const ctx = canvas.getContext("2d");
        const size = 1000;
    
        canvas.width = size;
        canvas.height = size;
    
       
      this.shapes.forEach(shape => {
        ctx.fillStyle = shape.color;
        ctx.fillRect(shape.x, shape.y, shape.size, shape.size);
      });

      
      }
    }
  };
  </script>
  