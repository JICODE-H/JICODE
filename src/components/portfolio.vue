<template>

<Ptpul :모달창="모달창" @닫기="모달창 = false"/>

  <div class="wrap">
    <div class="back">
       <img src="../assets/drawable-xxxhdpi/포폴/배경이미지.png" alt="">
       </div>
    <header>
      <div class="headerbox">
        <img src="../assets/drawable-xxxhdpi/포폴/header4.png" alt="">
        <Menu/>
        <div class="toplogobox">
          <img src="../assets/drawable-xxxhdpi/jicode_logo2.png" alt="">
          <h1>Portfolio</h1>
        </div>
      </div>
     </header>
     <div class="midbox">
      <ul>
        <li><a href="#" @click="모달창 = true"><img src="../assets/drawable-xxxhdpi/img1.png" alt="">
        <span>씨드콥</span></a></li>
        <li><a href="#" @click="모달창 = true"><img src="../assets/drawable-xxxhdpi/img2.png" alt="">
        <span>씨드콥</span></a></li>
        <li><a href="#" @click="모달창 = true"><img src="../assets/drawable-xxxhdpi/img3.png" alt="">
        <span>씨드콥</span></a></li>
        <li><a href="#" @click="모달창 = true"><img src="../assets/drawable-xxxhdpi/img4.png" alt="">
        <span>씨드콥</span></a></li>
        <li><a href="#" @click="모달창 = true"><img src="../assets/drawable-xxxhdpi/img5.png" alt="">
        <span>씨드콥</span></a></li>
        <li><a href="#" @click="모달창 = true"><img src="../assets/drawable-xxxhdpi/img6.png" alt="">
        <span>씨드콥</span></a></li>
      </ul>
     </div>
     <footer>
    <div class="footer">
       <Footertext/>
    </div>
     </footer>
  </div>
  
</template>

<script>

import Menu from "../components/Menu.vue";
import Footertext from "../components/Footertext.vue";
import Ptpul from "./Ptpul.vue"

export default {
    name: 'Home',
    components: {
      Footertext: Footertext,
      Menu: Menu,
      Ptpul: Ptpul,
  },
  data() {
    return {
      모달창 : false,
    }
  },
}

</script>

<style>
@import 'portfoliostyle.css';


</style>