<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  title: {
    type: String,
    default: null,
  },
  mileage: {
    type: Number,
    default: 75555,
  },
  lastService: {
    type: String,
    default: null
  },
  lastServiceMileage: {
    type: Number,
    default: 0,
  },
  type: {
    type: String as PropType<'sedan'|'suv'|'van'>,
    default: 'sedan',
  }
})
</script>

<template>
  <button class="flex flex-row gap-2 items-center text-left active:scale-95 duration-75">
    <img :src="`/cars/common/${type}.png`" class="w-32">
    <div class="flex flex-col gap-1">
      <span class="text-white text-lg font-semibold">{{ title }}</span>
      <div class="flex flex-col">
        <span class="text-md">Пробег при последнем ТО: <p class="text-white">{{ mileage }} км</p></span>
      </div>
    </div>
  </button>
</template>