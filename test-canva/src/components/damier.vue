<template>
    <v-layer>
      <template v-for="(row, yIndex) in rows" :key="yIndex">
        <template v-for="(cell, xIndex) in row" :key="xIndex">
          <v-rect
            :x="xIndex * cellSize"
            :y="yIndex * cellSize"
            :width="cellSize"
            :height="cellSize"
            :fill="cell ? 'black' : 'white'"
          />
        </template>
      </template>
    </v-layer>
  </template>
  
  <script>
  export default {
    props: {
      rows: {
        type: Array,
        default: () => []
      },
      cellSize: {
        type: Number,
        default: 50
      }
    }
  };
  </script>
  