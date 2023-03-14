<template>
  <div class="box-left">
    <Grid></Grid>
    <Pie></Pie>
    <Line></Line>
  </div>
</template>
<script setup lang="ts">
// 导入 Grid 网格组件
import Grid from './grid.vue'
// 导入 Pie 饼图组件
import Pie from './pie.vue'
// 导入 Line 折线图组件
import Line from './line.vue'
</script>
<style scoped lang="less">
.box-left{
  width: 400px;
}
</style>
