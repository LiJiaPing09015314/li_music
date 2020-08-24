<template>
  <div class="container border-bottom">
    <icon 
      v-for="(item,index) in findIcons" 
      :key="index" 
      :bgcolor="true"
      :icons="item" 
      @goPage="goPage(item.linkTo)"
    >
      <span class="today" v-if="item.text==='每日推荐'"></span>
    </icon>
  </div>
</template>
<script>
import {findIcons} from '@/getInfos/getData'
import icon from '@/components/icon'
import {indexapi} from '@/api/index'
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
    },
    goPage(link){
      if(link==='personalFm'){
        // 当如果是点击私人Fm时需要做的操作
        // 获取私人FM信息
        this._getPersonalFm()
      }else{
        this.$router.push(link)
      }
    },
    /**
     * 播放全部
     */
    startPlay(list){
      this.startPlayAll({
        list
      })
    },
    _getPersonalFm(){
      indexapi.personalFm().then(res=>{
        const list=res
        this.startPlay(list)
      })
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