<script setup lang="ts">
import { RouterView } from 'vue-router'
import { NConfigProvider, darkTheme } from 'naive-ui';
import { ref, watch } from 'vue'
import router from './router'

const themeOverrides = {
  common: {
    primaryColor: '#679DBB'
  }
}

const transitionName = ref("slide-left")
watch(router.currentRoute, (from, to)=>{
  const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      transitionName.value = toDepth < fromDepth ? 'slide-left' : 'slide-right'
})
</script>

<template>
  <n-config-provider :theme="darkTheme" :theme-overrides="themeOverrides">
  <router-view v-slot="{ Component }">
    <transition :name="transitionName">
      <component :is="Component" />
    </transition>
  </router-view>
  </n-config-provider>
</template>

<style>
.slide-left-enter-active,
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-leave-active {
  transition-delay: 0.5s;
  transition: all 0.2s ease-out;
}

.slide-left-leave-from,
.slide-left-enter-to,
.slide-right-leave-from,
.slide-right-enter-to {
  position: fixed;
  left: 0;
  right: 0;
}

.slide-left-enter-from {
  position: fixed;
  right: -100%;
  left: 100%;
  opacity: 0%;
}

.slide-left-leave-to {
  position: fixed;
  left: -100%;
  right: 100%;
  opacity: 0%;
}

.slide-right-enter-from {
  position: fixed;
  right: 100%;
  left: -100%;
  opacity: 0%;
}

.slide-right-leave-to {
  position: fixed;
  left: 100%;
  right: -100%;
  opacity: 0%;
}
</style>
