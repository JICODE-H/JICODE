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
      
    </div>

    <footer></footer>
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
