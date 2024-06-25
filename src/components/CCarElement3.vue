<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: null,
  },
  mileage: {
    type: Number,
    default: 115575,
  },
  lastService: {
    type: String,
    default: null
  },
  lastServiceMileage: {
    type: Number,
    default: 0,
  }
})
</script>

<template>
  <button class="flex flex-row gap-2 items-center text-left active:scale-95 duration-75">
    <img src="/TY2.png" class="h-16">
    <div class="flex flex-col gap-1">
      <span class="text-white text-lg font-semibold">{{ title }}</span>
      <div class="flex flex-col">
        <span class="text-md">Пробег <span class="text-white">{{ mileage }} км</span></span>
        <span class="text-sm">Последнее Т/О - {{ lastServiceMileage }} км назад ({{ lastService }})</span>
      </div>
      
    </div>
  </button>
</template>