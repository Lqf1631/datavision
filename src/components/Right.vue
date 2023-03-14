<template>
  <div class="box-right">
    <table class="box-right-table">
      <thead class="box-right-table-thead">
        <th>地区</th>
        <th>累计确诊</th>
        <th>新增确诊</th>
        <th>累计治愈</th>
        <th>累计死亡</th>
      </thead>
      <tbody v-for="item in list.item" class="box-right-table-table-tbody">
        <tr>
          <td>{{ item.name }}</td>
          <td>{{ item.total.confirm }}</td>
          <td>{{ item.today.confirm }}</td>
          <td>{{ item.total.heal }}</td>
          <td>{{ item.total.dead }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script setup lang="ts">
// 导入 useList 创建仓库的 hook 函数
import { useList } from '@/stores'
// 调用 useList 创建 list 仓库
const list = useList()
</script>
<style scoped lang="less">
.box-right {
  width: 400px;
  &-table {
    margin-top: 20px;
    width: 100%;
    border: 2px solid white;
    background-color: lightblue;
    text-align: center;
    &-thead {
      height: 30px;
      padding: 5px;
      white-space: nowrap;
    }
    &-tbody {
      padding: 5px;
      border: 2px solid white;
      white-space: nowrap;
    }
  }
}
th,
td {
  border: 1px solid white;
}

</style>
