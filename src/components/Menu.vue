<template>
  
<div class="top">
    <a href="http://localhost:8080/">
    <img class="logo" src="../assets/drawable-xxxhdpi/jicode_logo.png" alt="">
    </a>
    <div class="Menu">
    <ul class="Menuul">
      <li><a href="#">Company</a>
      <ul>
        <li><a href="#">Introduce</a></li>
        <li><a href="http://localhost:8080/development">Technology</a></li>
        <li><a href="#">Structure</a></li>
      </ul></li>
      <li><a href="#">Project</a>
      <ul>
        <li><a href="http://localhost:8080/portfolio">Portfolio</a></li>
      </ul></li>
      <li><a href="#">Contact us</a>
      <ul>
        <li><a href="http://localhost:8080/contact">Contact us</a></li>
        <li><a href="#">Direction</a></li>
      </ul></li>
    </ul>
    </div>
    </div>

</template>

<script>
export default {

}
</script>

<style>

.top {
  width: 100%;
  height: 81px;
  position: absolute;
  top: 0;
  border-bottom: solid 1px rgba(255, 255, 255, 0.3);
}
.top .logo {
  width: 60px;
  position: absolute;
  top: 30%; left: 17%;
}
.top .Menu {
  position: absolute;
  top: 0; right: 16%;
}
.top .Menuul {
  font-weight: 400;
  color: rgba(255, 255, 255, 0.8);
  font-size: 20px;
}
.top .Menuul li {position: relative;}
.top .Menuul > li {
  display: inline-block;
  padding: 24px 34px 28px;
}
.top .Menuul ul {
  position: absolute;
  top: 90%;
  display: block;
  margin-top: 5px;
  display: none;
}
.top .Menuul li:hover > a {
  text-shadow: 0 0 10px rgba(255,255,255,0.3);
  color: rgb(84, 155, 117);}
.top .Menuul li:hover ul {display: block;}
.top .Menuul ul li {padding-top: 17px;}
.top .Menuul ul li:hover {color: rgb(84, 155, 117);}
</style>



