<template>
  <div class="wrap">

    <header>
      <div class="headbox">
        <img class="headerImg" 
          src="../assets/drawable-xxxhdpi/문의/header2.png" alt="">
        <Menu />
        <div class="contaner">
          <div class="logohpbox">
            <img src="../assets/drawable-xxxhdpi/jicode_logo2.png" alt="">
            <h1>support<br>company</h1>
            <p>성심 성의를 다해 정성껏 서비스를 
            <br>제공해 드리겠습니다.</p>
          </div>
          <img src="../assets/drawable-xxxhdpi/문의/header_img.png" alt="">
        </div>
      </div>
    </header>

    <div class="contact">
      <h2 class="titleh">Contact Us</h2>
      <form action="">
        <p><input type="text" name="name" placeholder="Name"></p>
        <p><input type="email" name="email" placeholder="E-mail"></p>
        <p><input type="tel" name="phon" placeholder="Phon number"></p>
        <p><textarea name="text" placeholder="Text" id="" cols="30" rows="10"></textarea></p>
        <p><input class="inputbtn" type="submit" value="문의하기"></p>
      </form>
    </div>
    
    <div class="direction">
      <div class="directioninner">
        <h1 class="titleh">Company Direction</h1>
        <div class="mapimgs">
          <img src="../assets/drawable-xxxhdpi/map.png" alt="">
          <img src="../assets/drawable-xxxhdpi/문의/map2.png" alt="">
        </div>
          <img src="../assets/drawable-xxxhdpi/jicode3.png" alt="">
          <p>대전광역시 궁동 대학로169 지하층
            <br>(대전 유성구 궁동 432-4)</p>
        <div class="way">
          <div class="road">
            <img src="../assets/drawable-xxxhdpi/문의/icon_8.png" alt="">
            <div class="hp">
              <h2>도보</h2>
              <p>갑천역3번 출구에서 <span>1583m</span>
                <br>월평역(한국과학기술원) 2번출구에서 <span>1.2km</span>
                <br>충남대학교 대덕캠퍼스 정문에서 <span>723m</span></p>
            </div>
          </div>
          <div class="road">
            <img src="../assets/drawable-xxxhdpi/문의/icon_9.png" alt="">
            <div class="hp">
              <h2>대중교통</h2>
              <h3>대전복합버스터미널에서 출발</h3>
              <p>102, 106 복합터미널 승차 - 유림공원 하차
                <br>105 복합터미널 승차 - 궁동 하차</p>
              <h3>대전역 경부선(고속철도)에서 출발</h3>
              <p>606 대전역 승차 - 102 신동아파트 환승 - 유림공원 하차
                <br>606 대전역 승차 - 104 서구보건소 환승 - 충대농대입구 하차
                <br>514 목척교 승차 - 706 황실타운아파트 환승 - 유림공원 하차
                <br>614 대전역 승차 - 102 오정농수산물시장 환승 - 유림공원 하차
                <br>705 대전역 승차 - 108 선화동천주교회 환승 - 유림공원 하차
                <br>606 대전역 승차 - 108 사학연금회관 환승 - 유림공원 하차
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
    <Footertext />
    </footer>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Footertext from "../components/Footertext.vue";

export default {
    name: 'contact',
    components: {
      Footertext: Footertext,
      Menu: Menu,
  },
}
</script>

<style>
@import 'contactstyle.css';
</style>