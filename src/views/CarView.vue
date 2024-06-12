<script setup lang="ts">
import { mdiArrowLeft  } from '@mdi/js';
// @ts-ignore: JS Dep
import SvgIcon from '@jamescoyle/vue-icon';

import { NButton } from 'naive-ui'
</script>

<template>
  <div class="p-6">
    <div>
      <n-button text  @click="$router.push('/cars')">
        <template #icon>
          <svg-icon :path="mdiArrowLeft" type="mdi"/>
        </template>
        Мои машины
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
      <div class="instrumentsView mt-4 p-2 bg-[#282828] min-h-24 w-full rounded-lg">
        <div class="fastActions flex flex-col gap-2">
          <span class="text-sm font-semibold">Быстрые дейтсвия</span>
        </div>
      </div>
    </div>
  </div>
</template>