<script setup lang="ts">
import CAppBar from '@/components/CAppBar.vue';
import { useInvoiceStore } from '@/stores';
import { NDatePicker, NInput, NInputNumber } from 'naive-ui';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';

const data = ref({
  date: null,
  mileage: null,
  comment: null,
  cost: null,
})

const {title} = storeToRefs(useInvoiceStore())

</script>

<template>
  <div>
    <CAppBar :screenName="title"></CAppBar>
    <div class="mt-4 px-6 flex flex-col gap-4">
      <div class="flex flex-row gap-4 justify-center">
        <div class="flex bg-[#282828] h-20 w-48 flex-col gap-2 rounded-xl p-2">
          <span class="text-xs font-bold text-white">Пробег</span>
          <div class="flex flex-row w-full items-center gap-1">
            <n-input-number v-model:value="data.mileage" placeholder="" length="7" name="mileage" class="text-white w-28 focus:outline-none" />км
          </div>
        </div>
        <div class="flex bg-[#282828] h-20 w-48 flex-col gap-2 rounded-xl p-2">
          <span class="text-xs font-bold text-white">Дата</span>
          <div class="flex flex-row w-full items-center">
            <n-date-picker v-model:value="data.date" placeholder="" class="text-2xl !bg-transparent"></n-date-picker>
          </div>
        </div>
      </div>
      <div class="flex bg-[#282828] h-20 flex-col gap-2 rounded-xl p-2">
        <span class="text-xs font-bold text-white">Стоимость</span>
        <div class="flex flex-row w-full items-center">
          <n-input v-model:value="data.cost" placeholder="" class="text-2xl !bg-transparent"></n-input>
          <span>Руб.</span>
        </div>
      </div>
      <div class="flex bg-[#282828] flex-col gap-2 rounded-xl p-2">
        <span class="text-xs font-bold text-white">Комментарий</span>
        <div class="flex flex-row w-full items-center">
          <n-input type="textarea" v-model:value="data.comment" placeholder="Введите комментарий.." class="!bg-transparent"></n-input>
        </div>
      </div>
    </div>
  </div>
</template>