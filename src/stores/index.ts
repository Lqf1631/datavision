import { defineStore } from "pinia";
import { getApiList } from "@/axios/getApiList";
import type { Data, Children, ChinaAdd, ChinaTotal, StatisGradeCityDetail } from "@/interface/data";

export const useList = defineStore('list', {
  state: () => {
    return {
      data: <Data>{},
      item: <Children[]>[],
      chinaAdd: <ChinaAdd>{},
      chinaTotal: <ChinaTotal>{},
      cityDetail: <StatisGradeCityDetail[]>[]
    }
  },
  actions: {
    async get() {
      const result = await getApiList()
      this.data = result.data
      this.chinaAdd = this.data.diseaseh5Shelf.chinaAdd
      this.chinaTotal = this.data.diseaseh5Shelf.chinaTotal
      this.cityDetail = this.data.statisGradeCityDetail
    },
  }
})