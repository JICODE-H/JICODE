<template>

<div class="wrapD">
  <img class="background" src="../assets/drawable-xxxhdpi/소개/배경이미지.png" alt="">
  <header>
    <img src="../assets/drawable-xxxhdpi/소개/header3.png" 
      alt="" class="headerimg">
    <Menu />
    <div class="headertext">
      <h2>3D / Firmware / Software</h2>
      <h1>development<br>company</h1>
      <p>고객의 니즈에 맞춰 <span>펌웨어/소프트웨어 개발</span>로
       <br>전문적인 시스템 기능의 솔루션을 제공합니다</p>
      </div>
  </header>
  <div class="jicodeD">
    <div class="in">
    <img  src="../assets/drawable-xxxhdpi/jicode3.png" alt="" class="jicode">
    <p>지코드는 다분야의 기술들을 기반의 IT비즈니스 기업으로,
     <br><span>S/W. H/W, 3D Modeling / Printing</span>등의 범용적인 기술부터
     <br>IoT, AI, BIG DATA와 같은 4차 산업혁명 혁신기술까지
     <br>고도화된 다양한 솔루션을 제공합니다.</p>
     <ul>
       <li>
         <img src="../assets/drawable-xxxhdpi/소개/application.png" alt="">
       </li>
       <li>
         <div class="imgbox">
         <img src="../assets/drawable-xxxhdpi/소개/communication2.png" alt="">
         </div>
         <div class="ultext">
          <h3>Communication</h3>
          <p>Wifi<br>Bluetooth / BLE
          <br>ZigBee<br>Rora<br>RF</p>
         </div>
       </li>
       <li>
         <div class="imgbox">
         <img src="../assets/drawable-xxxhdpi/소개/sensors_devices2.png" alt="">
          </div>
          <div class="ultext">
          <h3>Sensors & Devices</h3>
          <p>Hardware<br>(회로 설계, PCB Artwork)
          <br>펌웨어 개발</p>
         </div>
       </li>
     </ul>
     </div>
  </div>
  <div class="structure">
    <h3>Corporate Structure</h3>
    <div class="imgS">
      <img src="../assets/drawable-xxxhdpi/소개/관계도.png" alt="">
    </div>
  </div>
  <footer id="development">
  <Footertext />
  </footer>
</div>

</template>

<script>
import Menu from "../components/Menu.vue";
import Footertext from "../components/Footertext.vue";

export default {
    name: 'development',
    components: {
      Footertext: Footertext,
      Menu: Menu,
  },
}
</script>

<style>
@import 'developmentstyle.css';
</style>