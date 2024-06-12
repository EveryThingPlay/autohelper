<script setup lang="ts">
  defineProps({
    screenName: {
      type: String,
      default: null
    }
  })
</script>

<template>
  <div class="h-16 mb-2">
    <div class="fixed w-full top-0 left-0 right-0 h-16 flex flex-row justify-center items-center text-white">
      <span>{{ screenName }}</span>
    </div>
  </div>
</template>