<template>
  <div id="app">
    <transition name="router-fade" mode="out-in">
      <keep-alive exclude="phoneVerify,phonePwd">
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<style lang="less">
#app {
  height: 100vh;
  width: 100vw;
}
</style>
