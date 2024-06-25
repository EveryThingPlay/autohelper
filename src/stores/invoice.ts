import { defineStore } from "pinia"
import { ref } from "vue"

export const useInvoiceStore = defineStore('invoice', ()=>{
  const title = ref<string>('')
  const cost = ref<number>(0)
  const date = ref<Date|undefined>()
  const comment = ref<string>('')
  const mileage = ref<number>(0)

  return { title, cost, date, comment, mileage }
})