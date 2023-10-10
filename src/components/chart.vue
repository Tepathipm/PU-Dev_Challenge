<script setup>
  import { ref, onMounted } from 'vue';
  import Chart from 'chart.js/auto';
  
  const chartCanvas = ref(null);
  
  const data = {
    labels: ['2548', '2549', '2550', '2551', '2552', '2553', '2554', '2555', '2556', '2557', '2558', '2559', '2560', '2561', '2562', '2563', '2564'],
    datasets: [
      {
        label: 'Cases',
        data: [0, 1, 0, 4, 4, 10, 9, 5, 2, 51, 32, 15, 14, 0, 0, 35, 79],
        backgroundColor: 'black',
        borderColor: 'black',
        borderWidth: 1
      }
    ]
  };
  
  const displayBarChart = () => {
    const ctx = chartCanvas.value.getContext('2d');
  
    new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        aspectRatio: 2,
        scales: {
            x: {
          title: {
            display: true,
            text: 'ปี'
          }
        },
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'จำนวนคดี'
          }
        }
        }
      }
    });
  };
  
  onMounted(() => {
    displayBarChart();
  });
</script>
  

<template>
    <canvas ref="chartCanvas"></canvas>
</template>

<style scoped>
  /* Add any necessary styles for the chart */
  *{
    font-family: 'IBM Plex Sans Thai';
  }
</style>
  