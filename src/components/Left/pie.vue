<template>
  <div class="pie"></div>
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
  // 在对应元素上创建饼图
  createPie()
})
// 定义创建饼图的函数
const createPie = () => {
  // 获取绘制饼图的元素，并将其初始化为绘图元素
  const myPie = echarts.init(document.querySelector('.pie') as HTMLElement)
  // 设置饼图参数
  myPie.setOption({
    title: {
      text: '前十城市新增',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
    },
    series: [
      {
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 5,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: list.cityDetail.splice(0, 10).map((v) => {
          return {
            name: v.city,
            value: v.nowConfirm,
          }
        }),
      },
    ],
  })
}
</script>
<style scoped lang="less">
.pie {
  padding-top: 10px;
  height: 320px;
  background-color: lightblue;
  display: flex;
  justify-content: center;
  border: 1px solid black;
  margin-left: 20px;
  margin-right: 20px;
}
</style>
