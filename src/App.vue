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
        <div class="text">
          <img class="textIcon"
            src="./assets/drawable-xxxhdpi/메인/머리아이콘.png" alt=""/>
          <h3>S/<span>W·H</span>/<span>W·</span>3D Modeling/Printing</h3>
          <h2>development<br />company</h2>
          <p>
            지코드는 다분야의 기술들을 기반으로 <br />새로운 가치를 만들어나가는
            <br />IT비즈니스 기업입니다
          </p>
          <p>
            S/W, H/W, 3D Modeling / Printing등의 범용적인 기술부터 <br />IoT,
            AI, BIG DATA와 같은 4차 산업혁명 혁신기술까지 <br />고도화된 다양한
            솔루션을 제공합니다.
          </p>
          <p>
            혁신과 성장으로 <br />미래를 이끄는 기업으로서 <br />고객과 함께
            발전하는 <br />최고의 비즈니스 파트너가 되겠습니다.
          </p>
        </div>
        <div class="deployment">
          <div class="text">
          <p class="h">Technologies for lot Deployment</p>
          <ul>
            <li><img src="./assets/drawable-xxxhdpi/메인/icon_0.png" alt=""></li>
            <li><img src="./assets/drawable-xxxhdpi/메인/icon_1.png" alt=""></li>
            <li><img src="./assets/drawable-xxxhdpi/메인/icon_2.png" alt=""></li>
            <li><img src="./assets/drawable-xxxhdpi/메인/icon_3.png" alt=""></li>
          </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="jifit"></div>
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

* {
  padding: 0;
  margin: 0;
  font-family: "Noto Sans KR", sans-serif;
}
a {
  text-decoration: none;
  color: inherit;
}
img {vertical-align: middle;}
ul,
li {list-style: none;}
/**/
.wrap {
  background: #aaa;
  width: 100%;
  overflow: hidden;
}
.inner {
  width: 1130px;
  margin: 0 auto;
}
.text {
  box-sizing: border-box;
  padding: 0 185px;
  margin: 40px auto 0;
}
.h {
  font-size: 18px;
  font-weight: 900;
}
/*공통 */

.header {
  position: relative;
  margin: 0 auto;
  width: 1130px; height: 100%;
  color: rgba(255, 255, 255, 0.8);
}
.headerImg {width: 100%; height: 510px;}

.headerP {
  position: absolute;
  top: 140px; left: 235px;
}
.headerP img {
  width: 115px;
  padding-bottom: 28px;
}
.headerP p {
  letter-spacing: -0.4px;
  line-height: 1.6;
  font-weight: 700;
}
.header .bnt {
  display: inline-block;
  font-size: 12px;
  position: absolute;
  bottom: 135px;
  right: 20%;
  background: none;
  color: rgba(255, 255, 255, 0.8);
  border: solid 1.5px rgba(255, 255, 255, 0.8);
  border-radius: 30px;
  padding: 5px 9px 8px;
  transition: all 0.2s;
}
.header .bnt:hover,
.header .bnt:focus {
  font-size: 13px;
  border-radius: 0;
  border: 1px solid transparent;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.8);
  transition: all 0.2s;
}
/*header*/

.company {
  position: relative;
  height: 100%;
  line-height: 1.3;
  letter-spacing: -0.4px;
}
.company .textIcon {
  width: 40px;
  padding-bottom: 8px;
}
.company .text h3 {
  font-size: 20px;
}
.company .text h3 span {
  letter-spacing: 1.5px;
}
.company .text h2 {
  text-transform: uppercase;
  line-height: 1.1;
  font-weight: 800;
  font-size: 37.2px;
  padding-bottom: 30px;
}
.company .text p {
  font-size: 15px;
  color: #2c2c2c;
  padding-bottom: 20px;
  letter-spacing: -0.6px;
}
.company .deployment .text .h {
  font-size: 18px;
  font-weight: 900;
  padding-bottom: 10px;
}
</style>
