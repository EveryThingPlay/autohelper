<script setup lang="ts">
import { mdiArrowLeft, mdiCarWash, mdiGasStation, mdiParking, mdiToolbox, mdiBank, mdiChartBar, mdiWarehouse, mdiMenu  } from '@mdi/js';
// @ts-ignore: JS Dep
import SvgIcon from '@jamescoyle/vue-icon';

import { NButton } from 'naive-ui'

const menus = [
  {
    title: "Быстрые действия",
    actions: [
      {
        icon: mdiCarWash,
        text: "Автомойка",
        onClick: ()=>{}
      },
      {
        icon: mdiGasStation,
        text: "Заправка",
        onClick: ()=>{}
      },
      {
        icon: mdiParking,
        text: "Парковка",
        onClick: ()=>{}
      },
      {
        icon: mdiToolbox,
        text: "Тех. обслуживание",
        onClick: ()=>{}
      }
    ]
  },
  {
    title: "Главное меню",
    actions: [
      {
        icon: mdiBank,
        text: "Финансы",
        onClick: ()=>{}
      },
      {
        icon: mdiChartBar,
        text: "Данные",
        onClick: ()=>{},
      },
      {
        icon: mdiWarehouse,
        text: "Гараж",
        onClick: ()=>{}
      },
      {
        icon: mdiMenu,
        text: 'Прочее',
        onClick: ()=>{}
      }
    ]
  }
]
</script>

<template>
  <div class="p-6">
    <div>
      <n-button text  @click="$router.push('/cars')">
        <template #icon>
          <svg-icon :path="mdiArrowLeft" type="mdi"/>
        </template>
        Мои автомобили
      </n-button>
      <div class="carView flex flex-col mt-12 gap-2">
        <img src="/bmw_large.png" />
        <div class="flex flex-col gap-2">
          <span class="text-xl text-white font-semibold">BMW 530d G30</span>
          <span> Пробег 98909 км</span>
          <div class="flex flex-row gap-2 items-center">
            <div class="h-2 w-2 rounded-full bg-[#FFAC0A]"></div>
              <span> Последнее ТО - 9000 км назад (05.04.2024)</span>
          </div>
        </div>
      </div>
      <div class="instrumentsView mt-8 p-2 bg-[#282828] min-h-24 w-full rounded-lg">
        <div class="fastActions flex flex-col gap-2" v-for="menu in menus" :key="menu.title">
          <span class="text-sm font-semibold">{{ menu.title }}</span>
          <div class="grid grid-cols-4 gap-2 w-full justify-items-center ">
            <button class="flex flex-col gap-2 w-16 active:scale-95 duration-75 items-center" v-for="button in menu.actions" :key="button.text" @click="button.onClick()">
              <svg-icon type="mdi" :path="button.icon" class="h-12 w-12"/>
              <span class="text-xs">{{ button.text }}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>