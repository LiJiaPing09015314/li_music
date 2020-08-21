<template>
  <div class="banner-container">
    <van-swipe :autoplay="5000" indicator-color="#dd001b">
      <van-swipe-item v-for="(item, index) in swiperList" :key="index">
        <img class="banner-img" :src="item.pic" alt />
        <span class="title" :style="{background:item.titleColor}">{{item.typeTitle}}</span>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
import { bannerSwiper } from "@/api/swiper";
export default {
  name: "swiper",
  data() {
    return {
      //照片
      swiperList: []
    };
  },
  methods: {
    _getFindInfo() {
      bannerSwiper.bannerSwiperFn().then(res => {
        if (res.code === 200) {
          res = res.banners;
          this.swiperList = res;
        }
      });
    }
  },
  created() {
    this._getFindInfo();
  }
};
</script>
<style lang="less" scoped>
@import "../../../assets/styles/global";
.banner-container {
  box-sizing: border-box;
  overflow: hidden;
  padding: 0.2rem;
  width: 100%;
  height: 0;
  padding-bottom: 40%;
  .banner-img {
    width: 100%;
    height: 100%;
    border-radius: @imgBorderRadius;
  }
  .title {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #fff;
    font-size: smaller;
    padding: 3px 6px;
    opacity: 0.8;
    border-top-left-radius: @imgBorderRadius;
  }
}
</style>