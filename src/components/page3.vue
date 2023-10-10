<script setup>
import { RouterLink, useRouter, RouterView  } from 'vue-router';
import Icons8DownRound from './icons/Icons8DownRound.vue';
</script>

<template>
<div class="w-screen h-screen relative bg-black">
<div class="desktop absolute flex flex-col items-strat justify-start space-y-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
    <h1 class="an-head1 text-start text-white">ความเห็นนักวิชาการ</h1>
    <h2 class="an-content1 text-start text-white">
        “ปัญหาใหญ่มากๆ ของมาตรา 112 คือมันมีนโยบายที่ให้ใช้อย่างร้ายแรงที่สุด ให้เป็นความลับ มันทำให้ภาพลักษณ์ของระบบยุติธรรมในคดี 112 เป็นกฎหมายที่ไม่ชัดเจนแน่นอน กฎหมายไม่มีความโปร่งใส และไม่สมเหตุสมผล  
        ไม่ว่าต่อไปนี้คุณจะตัดสินคดีอื่น คดีไหนก็ตาม คนก็จะเกิดความไม่เชื่อถือ เกิดความสงสัยในการกระทำของสถาบันตุลาการ ถ้าเป็นอย่างนั้นสังคมไทยอยู่ไม่ได้”
    <div class="miniContent flex flex-row mt-7 items-center justify-start space-x-4">
        <img src="/images/person-1.png" alt="person-1" class=""> 
        <div class = "person-info flex flex-col space-y-1 items-start justify-center">
        <span class="person-name text-white text-start">ดร. เข็มทอง ต้นสกุลรุ่งเรือง</span> 
        <span class="ed-info text-white text-start">คณะนิติศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</span>
        </div>
    </div>
    </h2>
    <div class="flex items-end justify-end">
    <h2 class="an-content1 text-end text-white">
        “เราสามารถมีระบอบประชาธิปไตยอันมีพระมหากษัตริย์ทรงเป็นประมุขได้ แต่เราก็สามารถทำให้กฏหมายนั้น มันไม่ขัดแย้งต่อหลักการพื้นฐาน สิทธิ 
        และเสรีภาพของประชาชนในสังคมประชาธิปไตยได้ และนั่นก็ควรเป็นสิ่งที่ควรจะทำ”
    <div class="miniContent flex flex-row-reverse mt-7 items-center justify-start space-x-4 space-x-reverse">
        <img src="/images/person-2.png" alt="person-1" class=""> 
        <div class = "person-info flex flex-col space-x-1 items-end justify-center">
        <span class="person-name text-white text-end">รองศาสตราจารย์ ดร. วาสนา วงศ์สุรวัฒน์</span> 
        <span class="ed-info text-white text-end">คณะอักษรศาสตร์ ภาควิชาประวัติศาสตร์ จุฬาลงกรณ์มหาวิทยาลัย</span>
        </div>
    </div>
    </h2>
</div>
    <h2 class="an-content1 text-start text-white">
        “ควรมีบุคคลหรือองค์กรในระดับสูง ซึ่งไม่เกี่ยวกับพระมหากษัตริย์โดยทางหนึ่งทางใด อาจเป็นองค์กรที่มีอยู่แล้วเช่น อัยการสูงสุด รัฐมนตรีกระทรวงวัฒนธรรม นายกรัฐมนตรี หรือตั้งองค์กรใหม่ขึ้นกลั่นกรองก่อนจะอนุมัติให้ดำเนินคดีได้ 
        อย่าปล่อยให้ใครๆ ก็สามารถตั้งตัวเป็นโจทย์ฟ้องร้องได้ และปล่อยให้ตำรวจชั้นผู้น้อยและอัยการชั้นผู้น้อย ต้องใช้วินิจฉัยของตนเองว่าจะดำเนินคดีหรือไม่ ซึ่งยากที่จะใช้อำนาจวินิจฉัยนั้นอย่างเที่ยงธรรม”
    <div class="miniContent flex flex-row mt-7 items-center justify-start space-x-4">
        <img src="/images/person-3.png" alt="person-1" class=""> 
        <div class = "person-info flex flex-col space-y-1 items-start justify-center ">
        <span class="person-name text-white text-start">นิธิ เอียวศรีวงศ์</span> 
        <span class="ed-info text-white text-start ">อดีตอาจารย์ประจำภาควิชาประวัติศาสตร์ คณะมนุษยศาสตร์ <br> มหาวิทยาลัยเชียงใหม่</span>
        </div>
    </div>
    </h2>
</div>
<router-link to="/second" class="btn2 absolute right-40 bottom-12 text-white w-11 h-11"><Icons8DownRound class="w-full h-full"/></router-link>
</div>
</template>

<style scoped>
img{
    width: 86px;
    height: 86px;
}
.desktop{
  margin: 0 auto;
  padding: 1rem;
  width: 1020px;
  height: 878px;
}
.an-head1{
    width: 417px;
    height: 43px;
    font-family: 'Inter';
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    left: 360px;
}

.an-content1{
    font-family: 'IBM Plex Sans Thai';
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    left: 360px;
    width: 480px;
    height: 222px;
}

.person-info{
    width: 480.21px;
    height: 86px;
    top: 2655px;
    left: 360px;
}
.person-name{
    font-family: 'IBM Plex Sans Thai';
    font-weight: 700;
    font-size: 12px;
    line-height: 18px;
}

.ed-info{
    font-family: 'IBM Plex Sans Thai';
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    width: 380px;
    height: 36px;
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
