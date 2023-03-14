<template>
  <!-- 采用属性绑定的形式，将 box 的背景设置为图片样式，再调用 url(path) 来设置图片路径 -->
  <div class="box" :style="{ background: `url(${bg})` }">
    <Light></Light>
    <Center></Center>
    <Right></Right>
  </div>
</template>
<script setup lang="ts">
// 采用 css 模块和属性绑定的形式，将 assets 中的图片设置为背景
// 此处 bg 实质为图片路径地址
import bg from './assets/R-C.jpg'
// 导入组件 Center
import Center from './components/Center.vue' 
// 导入组件 Right
import Right from './components/Right.vue'
import Light from './components/Left/index.vue'

</script>
<style lang="less">
* {
  padding: 0;
  margin: 0;
}
html,
body,
#app {
  height: 100%;
  overflow: hidden;
}
.box {
  height: 100%;
  overflow: hidden;
  display: flex;
  z-index: -1;
}
</style>
