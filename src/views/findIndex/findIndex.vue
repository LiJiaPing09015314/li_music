<template>
  <div>
    <swiper></swiper>
    <icon></icon>
  </div>
</template>
<script>
import swiper from './components/swiper'
import icon from './components/icons'
export default {
  name:'findIndex',
  components: {
    swiper,
    icon
  }
}
</script>
<style lang="less" scoped>
@import url("//at.alicdn.com/t/font_1295705_yfxum6q2gip.css");
.tips {
  box-sizing: border-box;
  padding: 0.1rem 0.2rem;
  background-color: rgba(0, 0, 0, 0.6);
  color: #fff;
  font-size: 0.23rem;
  border-radius: 0.3rem;
}
</style>