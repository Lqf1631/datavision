<template>
  <div class="grid">
    <div class="grid-box">
      <div class="grid-box-content1">
        较昨日<span>+{{ list.chinaAdd.confirm }}</span>
      </div>
      <div class="grid-box-content2">{{ list.chinaTotal.confirm }}</div>
      <div class="grid-box-content3">累计确诊</div>
    </div>
    <div class="grid-box">
      <div class="grid-box-content1">
        较昨日<span>+{{ list.chinaAdd.dead }}</span>
      </div>
      <div class="grid-box-content2">{{ list.chinaTotal.dead }}</div>
      <div class="grid-box-content3">累计死亡</div>
    </div>
    <div class="grid-box">
      <div class="grid-box-content1">
        较昨日<span>+{{ list.chinaAdd.heal }}</span>
      </div>
      <div class="grid-box-content2">{{ list.chinaTotal.heal }}</div>
      <div class="grid-box-content3">累计治愈</div>
    </div>
    <div class="grid-box">
      <div class="grid-box-content1">
        较昨日<span>+{{ list.chinaAdd.localConfirm }}</span>
      </div>
      <div class="grid-box-content2">
        {{ list.chinaTotal.localConfirm }}
      </div>
      <div class="grid-box-content3">本地确诊</div>
    </div>
    <div class="grid-box">
      <div class="grid-box-content1">
        较昨日<span>+{{ list.chinaAdd.importedCase }}</span>
      </div>
      <div class="grid-box-content2">
        {{ list.chinaTotal.importedCase }}
      </div>
      <div class="grid-box-content3">境外输入</div>
    </div>
    <div class="grid-box">
      <div class="grid-box-content1">
        较昨日<span>+{{ list.chinaAdd.nowConfirm }}</span>
      </div>
      <div class="grid-box-content2">{{ list.chinaTotal.nowConfirm }}</div>
      <div class="grid-box-content3">现有确诊</div>
    </div>
  </div>
</template>
<script setup lang="ts">
// 导入 useList 创建数据仓库的 hook 函数
import { useList } from '@/stores'
// 创建 list 仓库实例
const list = useList()
</script>
<style scoped lang="less">
.grid {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto;
  background-color: lightblue;
  margin-top: 20px;
  margin-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  &-box {
    display: flex;
    border: 1px solid black;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-content1 {
      padding: 5px;
      span {
        font-weight: bold;
      }
    }
    &-content2 {
      padding: 5px;
      font-weight: bold;
    }
    &-content3 {
      padding: 5px;
    }
  }
}
</style>
