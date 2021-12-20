<template>
  
      <div class="bottem">
        <img class="footerlogo" src="../assets/drawable-xxxhdpi/jicode2.png" alt="">
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
          <li><a href="#"><img src="../assets/drawable-xxxhdpi/icon_4.png" alt=""></a></li>
          <li><a href="#"><img src="../assets/drawable-xxxhdpi/icon_5.png" alt=""></a></li>
          <li><a href="#"><img src="../assets/drawable-xxxhdpi/icon_6.png" alt=""></a></li>
          <li><a href="#"><img src="../assets/drawable-xxxhdpi/icon_7.png" alt=""></a></li>
        </ul>
        </div>
      </div>
</template>

<script>
export default {

}
</script>

<style>

  footer .bottem {
    height: 146px; width: 1269px;
    margin: 0 auto;
    position: relative;
  }
  footer .bottem .footerlogo {width: 174px;}
  footer .bottem .footertext {
    position: absolute;
    top: -4px; left: 318px;
    font-weight: 500;
  }
  footer .bottem .footertext span {
    font-size: 18px;
    line-height: 1.55;
  }
  footer .bottem .footertext p {
    font-size: 15px;
    line-height: 1.5;
    margin-bottom: 9px;
  }
  footer .bottem .sns{
    position: absolute;
    bottom: 0; right: 0;
  }
  footer .bottem ul{
    display: flex;
    width: 209px;
    justify-content: space-between;
  }
  footer .bottem ul li {
    width: 24px; height: 24px;
  }
  footer .bottem ul li:nth-child(2){
    width: 30px; height: 24px;
  }
  footer .bottem ul li img {
    margin-top: -6px;
    width: 100%; height: 100%;
  }

</style>