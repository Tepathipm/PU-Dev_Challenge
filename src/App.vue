<script setup>
import  Icons8DownRound  from '../src/components/icons/Icons8DownRound.vue'
</script>

<template>
<div class="w-screen h-screen relative bg-black border border-red-400">
  <div class="desktop absolute flex flex-col items-center justify-start space-y-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <h1 class="an-head text-center font-normal text-white">ม.๑๑๒</h1>
    <h2 class="an-content text-lg text-center font-normal text-white">
      "ผู้ใดหมิ่นประมาท ดูหมิ่น หรือแสดงความอาฆาตมาดร้าย พระมหากษัตริย์ พระราชินี รัชทายาท หรือผู้สำเร็จราชการแทนพระองค์ ต้องระวางโทษจำคุกตั้งแต่สามปีถึงสิบห้าปี"
    </h2>
  </div>
  <button class="btn absolute right-24 bottom-12 text-gray-300 w-11 h-11"><Icons8DownRound class="w-full h-full"/></button>
</div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Thai:wght@400;700&family=Inter:wght@400;700&display=swap');

*{
  margin: 0;
  padding: 0;
}

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
