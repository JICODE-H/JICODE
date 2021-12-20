<template>
  <div class="wrap">
    <header>
      <div class="header">
        <img
          class="headerImg"
          src="./assets/drawable-xxxhdpi/메인/header.png"
          alt="헤더이미지"
        />
        <Menu />
        <div class="headerP">
          <img src="./assets/drawable-xxxhdpi/jicode.png" alt="" />
          <p>
            Firm ware<br />
            Software programing<br />
            3D modeling<br />
            Android<br />
            UI / UX Design
          </p>
        </div>
        <a class="bnt" href="#">문의하러 가기</a>
      </div>
    </header>
    
    <div class="company">
      <div class="inner">
        <div class="headtext">
          <img class="textIcon" src="./assets/drawable-xxxhdpi/메인/머리아이콘.png" alt=""/>
          <h2>S/<span>W·H</span>/<span>W·</span>3D Modeling/Printing</h2>
          <h1>development<br />company</h1>
        </div>
        <div class="textbox">
          <p>코드는 다분야의 기술들을 기반으로 
            <br />새로운 가치를 만들어나가는
            <br />IT비즈니스 기업입니다.</p>
          <p>S/W, H/W, 3D Modeling / Printing등의 범용적인 기술부터 
            <br />IoT, AI, BIG DATA와 같은 4차 산업혁명 혁신기술까지 
            <br />고도화된 다양한 솔루션을 제공합니다.</p>
          <p>혁신과 성장으로 
            <br />미래를 이끄는 기업으로서 
            <br />고객과 함께 발전하는 
            <br />최고의 비즈니스 파트너가 되겠습니다.</p>
        </div>
      </div>
    </div>

    <div class="deployment">
      <div class="inner">
        <p class="title">Technologies for lot Deployment</p>
        <ul>
          <li>
            <span><img src="./assets/drawable-xxxhdpi/메인/icon_0.png" alt=""/></span>
          </li>
          <li>
            <span><img src="./assets/drawable-xxxhdpi/메인/icon_1.png" alt="" />
              <p>정보처리</p></span>
          </li>
          <li>
            <span><img src="./assets/drawable-xxxhdpi/메인/icon_2.png" alt="" />
              <p>네트워크 통신</p></span>
          </li>
          <li>
            <span><img src="./assets/drawable-xxxhdpi/메인/icon_3.png" alt="" />
              <p>센서 및 디바이스</p></span>
          </li>
        </ul>
      </div>
    </div>

    <div class="jifit">
      <img class="bg" src="./assets/drawable-xxxhdpi/메인/background_img.png" alt="배경1">
      <div class="inner">
        <div class="title">Jicode Solution Program</div>
        <div class="box">
          <img src="./assets/drawable-xxxhdpi/메인/jifit_logo.png" alt="지피트로고">
          <p>일반 헬스기구에 장착하여
            <br>운동 중량, 운동 개수, 휴식 시간 등을 수집.
            <br>앱과 웹을 통해 운동 통계 데이터를
            <br>한 눈에 볼 수 있는 <span>장착형 스마트 짐 솔루션</span></p>
        </div>
        <img class="product" src="./assets/drawable-xxxhdpi/메인/입체이미지.png" alt="제품이미지">
        <img class="schematization" src="./assets/drawable-xxxhdpi/메인/아이콘도식화.png" alt="">
      </div>
    </div>

    <div class="list">
      <img class="bg" src="./assets/drawable-xxxhdpi/메인/background.png" alt="">
      <div class="inner">
        <div class="title">Jicode Portfoilo List</div>
        <div class="listbox">
        <ul>
          <li><img src="./assets/drawable-xxxhdpi/img1.png" alt=""></li>
          <li><img src="./assets/drawable-xxxhdpi/img2.png" alt=""></li>
          <li><span><img src="./assets/drawable-xxxhdpi/img3.png" alt=""></span></li>
          <li><span><img src="./assets/drawable-xxxhdpi/img4.png" alt=""></span></li>
          <li><img src="./assets/drawable-xxxhdpi/img5.png" alt=""></li>
          <li><img src="./assets/drawable-xxxhdpi/img6.png" alt=""></li>
          </ul>
        </div>
      </div>
    </div>

    <footer>
      <div class="centerbox">
      <h2>Company Direction</h2>
      <p>지코드 위치</p>
      <img class="map" src="./assets/drawable-xxxhdpi/map.png" alt="">
      </div>
      <div class="bottem">
        <img class="footerlogo" src="./assets/drawable-xxxhdpi/jicode2.png" alt="">
        <div class="footertext">
          <span>지코드(JICODE)</span>
          <p>34138 대전광역시 궁동 대학로169 지하층
          <br>169, Daehak-ro, Yuseong-gu, Daejeon,
          <br>Republic of Korea</p>
          <p>사업자등록번호 00000-0000000
          <br>대표전화 000-000-0000
        </p>
        </div>
        <div class="sns">
        <ul>
          <li><a href="#"><img src="./assets/drawable-xxxhdpi/icon_4.png" alt=""></a></li>
          <li><a href="#"><img src="./assets/drawable-xxxhdpi/icon_5.png" alt=""></a></li>
          <li><a href="#"><img src="./assets/drawable-xxxhdpi/icon_6.png" alt=""></a></li>
          <li><a href="#"><img src="./assets/drawable-xxxhdpi/icon_7.png" alt=""></a></li>
        </ul>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Menu from "./Menu.vue";

export default {
  name: "App",
  components: {
    Menu: Menu,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700;900&display=swap");
@import 'homestyle.css';

</style>
