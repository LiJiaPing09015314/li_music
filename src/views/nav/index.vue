<template>
  <div>
    <!-- 頂部導航條 -->
    <nav class="nav-wrapper">
      <div class="nav-left">
          <i class="nav iconnav ripple"></i>
      </div >
      <ul class="nav-center">
        <router-link tag="li" class="nav-title ripple" to="/">我的</router-link>
        <router-link tag="li" class="nav-title ripple" to="/find">发现</router-link>
        <router-link tag="li" class="nav-title ripple" to="/">朋友</router-link>
        <router-link tag="li" class="nav-title ripple" to="/">视频</router-link>
      </ul>
      <div class="nav-right">
        <router-link tag="i" class="nav iconsousuo ripple" to="/"></router-link>
      </div>
    </nav>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
@import "../../assets/styles/global";
@import url("//at.alicdn.com/t/font_1298894_8b2aso7zegl.css");
@height: 1rem;
.navIcon {
  width: @height;
  height: @height;
  border-radius: 50%;
  text-align: center;
}
.nav-wrapper {
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: @height;
  padding: 0 0.23rem;
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  z-index: 2;
  background-color: #fff;
  line-height: @height;
  .nav-left {
    flex: 2;
    display: flex;
    justify-content: left;
    align-items: center;
    .iconnav {
      .navIcon();
    }
  }
  .nav-center {
    flex: 6;
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: #999;
    font-size: 0.24rem;
    .nav-title {
      .navIcon();
    }
  }
  .nav-right{
    flex:2;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .iconsousuo{
      .navIcon()
    }
  }
}

</style>