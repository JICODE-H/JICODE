<template>
  
<div class="top">
    <a href="#">
    <img class="logo" src="./assets/drawable-xxxhdpi/jicode_logo.png" alt="">
    </a>
    <ul class="Menu">
      <li><a href="#">Company</a></li>
      <li><a href="#">Project</a></li>
      <li><a href="#">Contact us</a></li>
    </ul>
    </div>

</template>

<script>
export default {

}
</script>

<style>

.header .top {
  width: 100%;
  height: 45px;
  position: absolute;
  top: 0;
  border-bottom: solid 1px rgba(150, 150, 150, 0.3);
}
.header .top .logo {
  width: 33px;
  position: absolute;
  top: 25%; left: 15%;
}
.header .top .Menu {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  font-size: 10px;
  position: absolute;
  top: 0; right: 15%;
}
.header .top .Menu li {
  display: inline-block;
  padding: 15px 25px 25px;
}

</style>