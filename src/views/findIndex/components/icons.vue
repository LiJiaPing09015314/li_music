<template>
  <div class="container border-bottom">
    <icon 
      v-for="(item,index) in findIcons" 
      :key="index" 
      :bgcolor="true"
      :icons="item" 
    >
      <span class="today" v-if="item.text==='每日推荐'"></span>
    </icon>
  </div>
</template>
<script>
import {findIcons} from '@/getInfos/getData'
import icon from '@/components/icon'
export default {
  name:'findIcon',
  data(){
    return{
      findIcons
    }
  },
  components: {
    icon
  },
  methods: {
    iniData(){
      this.findIcons=findIcons()
    }
  },
  created () {
    this.iniData()
  }
}
</script>
<style lang="less" scoped>
@import "../../../assets/styles/global";
.container {
  .flex-around();
  width: 100%;
  height: 1.6rem;
  align-items: center;
  padding: 0.2rem 0 0.3rem;
  .today {
    position: absolute;
    top: 0.09rem;
    left: 50%;
    transform: translateX(-50%);
    font-size: 0.2rem;
  }
}
</style>