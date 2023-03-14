<template>
  <div class="line"></div>
</template>
<script setup lang="ts">
// 导入创建 list 仓库的 useList hook 函数
import { useList } from '@/stores'
// 导入 echarts
import * as echarts from 'echarts'
// 导入 onMounted 生命周期函数
import { onMounted } from 'vue'
// 创建 list 仓库
const list = useList()
// 调用 onMounted 生命周期函数，页面渲染完成后进行操作
onMounted(async () => {
  // 等待数据获取成功
  await list.get()
  // 在对应元素上创建折线图
  createLine()
})
// 定义创建折线图的函数
const createLine = () => {
  // 获取绘制折线图的元素并初始化绘制
  const myLine = echarts.init(document.querySelector('.line') as HTMLElement)
  const lineCity = list.cityDetail.slice(0, 10).map(v=>{return v.city})
  const lineNum = list.cityDetail.slice(0, 10).map(v=>{return v.nowConfirm})
  myLine.setOption({
    // 设置追踪提示，根据坐标轴追踪
    tooltip: {
      trigger: 'axis',
    },
    // grid 属性设置图与绘图元素的边界距离，即设置折线图大小
    grid: {
      x: 40,
      y: 10,
      x2: 30,
      y2: 30,
    },
    // 控制标签数据显示
    label: {
      show: true,
    },
    // x 轴
    xAxis: {
      type: 'category',
      data: lineCity,
      // 设置 x 轴标题
      axisLabel: {
        interval: 0, // 是否全显示
        rotate: 45, // 全显示出现重叠时，可以采用旋转
        // 字体设置
        textStyle: {
          fontSize: 8,
        },
      },
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: lineNum,
        type: 'line',
        smooth: true,
      },
    ],
  })
}
</script>
<style scoped lang="less">
.line {
  margin-top: 10px;
  height: 240px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
