<template>
  
<div class="black" v-if="모달창 == true" @click="$emit('닫기')">
  <div class="white">
    <h1>씨드콥</h1>
    <div class="box">
    <a href="#"><img src="../assets/drawable-xxxhdpi/포폴/sign1.png" alt=""></a>
    <div class="whitebox"><img src="../assets/drawable-xxxhdpi/img7.png" alt=""></div>
    <a href="#"><img src="../assets/drawable-xxxhdpi/포폴/sign2.png" alt=""></a>
    </div>
  </div>
</div>


</template>

<script>
export default {
  props : {
    모달창 : Boolean,
  }
}

</script>

<style>
body {margin: 0;}
.black {
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 10;
  padding: 180px 100px;
  box-sizing: border-box;
}
.white {
  width: 100%;
}
.white h1 {
  color: #fff;
  display: block;
  padding:0 0 10px 200px;
  font-weight: 400;
  }
.white .box {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
.white .box a {
  padding: 30px;
  width: 35px;
}
.white .box a img {
  width: 100%;}
.white .box .whitebox {
  width: 75%;
}
.white .box .whitebox img {width: 100%;}


</style>