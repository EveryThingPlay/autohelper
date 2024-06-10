<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider, darkTheme } from 'naive-ui';
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <router-view>
    </router-view>
  </n-config-provider>
</template>

<style scoped>
</style>
