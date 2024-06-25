<script setup lang="ts">
import CAppBar from '@/components/CAppBar.vue';
import { useInvoiceStore } from '@/stores';
import { NDatePicker, NInput, NInputNumber } from 'naive-ui';
import { NButton } from 'naive-ui'
import { storeToRefs } from 'pinia';
import { mdiArrowLeft } from '@mdi/js';
import { ref } from 'vue';

const data = ref({
  date: null,
  mileage: null,
  comment: null,
  cost: null,
})


</script>

<template>
  <div>
    <CAppBar tertiary screen-name="Добавить транспортное средство"/>
    <n-button text  @click="$router.back()">
        <template #icon>
          <svg-icon :path="mdiArrowLeft" type="mdi"/>
        </template>
        Назад
      </n-button>
    <div class="mt-4 px-6 flex flex-col gap-4">
      <div class="flex flex-row gap-4 justify-center">
        <div class="flex bg-[#282828] h-20 w-48 flex-col gap-2 rounded-xl p-2">
          <span class="text-xs font-bold text-white">Марка Автомобиля</span>
          <div class="flex flex-row w-full items-center">
          <n-input v-model:value="data.cost" placeholder="" class="text-2xl !bg-transparent"></n-input>
        </div>
        </div>
        <div class="flex bg-[#282828] h-20 w-48 flex-col gap-2 rounded-xl p-2">
          <span class="text-xs font-bold text-white">Модель Автомобиля</span>
          <div class="flex flex-row w-full items-center">
          <n-input v-model:value="data.cost" placeholder="" class="text-2xl !bg-transparent"></n-input>
        </div>
        </div>
        <div class="flex bg-[#282828] h-20 w-48 flex-col gap-2 rounded-xl p-2">
          <span class="text-xs font-bold text-white">Пробег</span>
          <div class="flex flex-row w-full items-center gap-1">
            <n-input-number v-model:value="data.mileage" placeholder="" length="7" name="mileage" class="text-white w-28 focus:outline-none" />км
          </div>
        </div>
      </div>

      <div class="flex flex-row gap-4 justify-center">
        <div class="flex bg-[#282828] h-20 w-48 flex-col gap-2 rounded-xl p-2">
          <span class="text-xs font-bold text-white">Марка Автомобиля</span>
          <div class="flex flex-row w-full items-center">
          <n-input v-model:value="data.cost" placeholder="" class="text-2xl !bg-transparent"></n-input>
        </div>
        </div>
        <div class="flex bg-[#282828] h-20 w-48 flex-col gap-2 rounded-xl p-2">
          <span class="text-xs font-bold text-white">Тип топлива</span>
          <div class="flex flex-row w-full items-center">
          <n-input v-model:value="data.cost" placeholder="" class="text-2xl !bg-transparent"></n-input>
        </div>
        </div>
        <div class="flex bg-[#282828] h-20 w-48 flex-col gap-2 rounded-xl p-2">
          <span class="text-xs font-bold text-white">Стоимость</span>
          <div class="flex flex-row w-full items-center">
            <n-input v-model:value="data.cost" placeholder="" class="text-2xl !bg-transparent"></n-input>
            <span>Руб.</span>
        </div>
        </div>
      </div>
      <div class="flex bg-[#282828] flex-col gap-2 rounded-xl p-2">
        <span class="text-xs font-bold text-white">Комментарий</span>
        <div class="flex flex-row w-full items-center">
          <n-input type="textarea" v-model:value="data.comment" placeholder="Введите комментарий.." class="!bg-transparent"></n-input>
        </div>
        <NButton size="large" @click="$router.back()"> Добавить</NButton>
      </div>
    </div>
  </div>
</template>