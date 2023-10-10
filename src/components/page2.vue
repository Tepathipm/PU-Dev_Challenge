<script setup>
import { RouterLink, useRouter, RouterView  } from 'vue-router';
import Icons8DownRound from './icons/Icons8DownRound.vue';
import BarChart from './chart.vue'

</script>

<template>
<div class="w-screen h-screen relative bg-white ">
<div class="desktop absolute flex flex-col items-strat justify-start space-y-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <h1 class="an-head text-start text-black">จำนวนคดีที่เกิดขึ้น</h1>
    <h2 class="an-content text-start text-black">
        มาตรา 112 มีการตีความการกระทำอย่างไร้ขอบเขต แต่ทุกคนสามารถผู้กล่าวโทษให้ดำเนินคดีได้ จึงมีการกล่าวหากันเป็นจำนวนมากในช่วงที่มีความขัดแย้งทางการเมืองหลังจากปี 2548 เป็นต้นมา
    </h2>
    <BarChart class="an-bar text-center text-black" />
    <h2 class="text-center">ที่มา: <a href="https://freedom.ilaw.or.th/node/817" target="_blank" class="decoration-1">iLaw</a></h2>
</div>
<router-link to="/third" class="btn absolute right-24 bottom-12 text-black w-11 h-11"><Icons8DownRound class="w-full h-full"/></router-link>
<router-link to="/first" class="btn2 absolute right-40 bottom-12 text-black w-11 h-11"><Icons8DownRound class="w-full h-full"/></router-link>
</div>
</template>

<style scoped>
.desktop{
  margin: 0 auto;
  padding: 0.5rem;
  width: 1042px;
  height: 688px;
}
.an-head{
    width: 334px;
    height: 40px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    left: 360px;
}

.an-content{
    font-family: 'IBM Plex Sans Thai';
    font-weight: 400;
    font-size: 18px;
    line-height: 27px;
    left: 360px;
}

.btn{
  transition: .7s;
  position: fixed;
}

.btn:hover{
  animation: down 1.85s infinite;
  transition: .7s;
  opacity: 40%;
}

.btn2{
  transition: .7s;
  position: fixed;
  transform: rotate(180deg);
}

.btn2:hover{
  animation: up 1.85s infinite;
  transition: .7s;
  opacity: 40%;
}

@keyframes down {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(0, -20px);
  }
    100% {
    transform: translate(0, 0);
  }
}

@keyframes up {
  0% {
    transform: translate(0, 0) rotate(180deg);

  }
  50% {
    transform: translate(0, -20px) rotate(180deg);

  }
    100% {
    transform: translate(0, 0) rotate(180deg);

  }
}
</style>
