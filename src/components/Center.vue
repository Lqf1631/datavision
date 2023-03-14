<template>
  <div class="box-center"></div>
</template>
<script setup lang="ts">
// 导入中国地图数据
import '../assets/china.js'
// 导入 useList 创建数据仓库的 hook 函数
import { useList } from '@/stores';
// 导入 echarts 
import * as echarts from 'echarts'
// 导入 onMounted 生命周期函数
import { onMounted } from 'vue';
// 创建 list 仓库实例
const list = useList()

onMounted(async ()=>{
  // DOM 渲染完成，则调用 list 仓库实例的方法初始化数据，为异步操作
  await list.get()
  // 等待数据完成后再将数据渲染到图像上
  createMap()
})

// 定义创建地图的函数
const createMap = () => {
  const city = list.data.diseaseh5Shelf.areaTree[0].children
  // 设置 div-left 默认展示，即给初始的 list.item 赋值
  list.item = city[16].children
  // 将数据转换为使用格式
  const data = city.map((n) => {
    return {
      name: n.name,
      value: n.total.confirm,
      item: n.children,
    }
  })
  // 获取 DOM 元素，在标签内绘图
  const myMap = echarts.init(
    document.querySelector('.box-center') as HTMLElement
  )
  // 调用该方法进行绘图
  myMap.setOption({
    tooltip: {
      show: true,
      formatter(params: any) {
        return params.name + '  确诊人数:' + params.value
      },
    },
    geo: {
      map: 'china',
      roam: false, // 一定要关闭拖拽
      zoom: 1.23,
      center: [105, 36], // 调整地图位置
      label: {
        show: false,
        fontSize: '10',
        color: 'rgba(0,0,0,0.7)',
      },
      emphasis: {
        show: false,
        areaColor: '#184cff',
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowBlur: 5,
        borderWidth: 0,
        shadowColor: 'rgba(0, 0, 0, 0.5)',
      },
      itemStyle: {
        areaColor: '#0d0059',
        borderColor: '#389dff',
        borderWidth: 2, //设置外层边框
        shadowBlur: 5,
        shadowOffsetY: 8,
        shadowOffsetX: 0,
        shadowColor: '#01012a',
      },
    },
    // 数据
    series: [
      {
        type: 'map',
        map: 'china',
        roam: false, // 是否可以鼠标滚轮缩放
        zoom: 1.23, // 缩放
        center: [105, 36],
        geoIndex: 1, // 控制其 z 轴显示
        aspectScale: 0.75, // 长宽比
        showLegendSymbol: false, // 存在legend时显示
        label: {
          show: true, // 控制省份名展示
          color: 'white', // 省份显示颜色
          formatter: '{b} {c}',
        },
        emphasis: {
          show: false,
          color: '#fff',
          areaColor: '#17008d',
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          shadowBlur: 5,
          borderWidth: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
        itemStyle: {
          areaColor: '#0d0059', // 地区颜色
          borderColor: '#389dff', // 轮廓线颜色
          borderWidth: 1, // 轮廓线宽度
        },
        data: data,
      },
    ],
  })
  // 监听点击事件，获取点击的区域数据
  myMap.on('click', (e: any) => {
    list.item = e.data.item
  })
}
</script>
<style scoped lang="less">
  .box-center {
    flex: 1;
  }
</style>