<script setup>
import { RouterLink, useRouter, RouterView  } from 'vue-router';
import Icons8DownRound from './icons/Icons8DownRound.vue';


const router = useRouter()
</script>

<template>
<div class="w-screen h-screen relative bg-black">
  <div class="desktop absolute flex flex-col items-center justify-start space-y-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <h1 class="an-head text-center font-normal text-white">ม.๑๑๒</h1>
    <h2 class="an-content text-lg text-center font-normal text-white">
      "ผู้ใดหมิ่นประมาท ดูหมิ่น หรือแสดงความอาฆาตมาดร้าย พระมหากษัตริย์ พระราชินี รัชทายาท หรือผู้สำเร็จราชการแทนพระองค์ ต้องระวางโทษจำคุกตั้งแต่สามปีถึงสิบห้าปี"
    </h2>
  </div>
  <router-link to="/second" class="btn absolute right-24 bottom-12 text-gray-300 w-11 h-11"><Icons8DownRound class="w-full h-full"/></router-link>
</div>
</template>


<style scoped>

.desktop{
  margin: 0 auto;
  padding: 8rem;
  width: 1042px;
  height: 688px;
}
.an-head{
  font-family: 'Inter';
  width: 449px;
  height: 174px;
  font-size: 164px;
  line-height: 164px;
}

.an-content{
  font-family: 'IBM Plex Sans Thai';
  width: 720px;
  height: 105px;
  padding: 20px;
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
</style>
