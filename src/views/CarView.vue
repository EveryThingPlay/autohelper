<script setup lang="ts">
import { mdiArrowLeft  } from '@mdi/js';
// @ts-ignore: JS Dep
import SvgIcon from '@jamescoyle/vue-icon';
import router from '@/router';

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
        <div class="flex flex-col">
          <span class="text-xl text-white font-semibold">BMW 530d G30</span>
        </div>
      </div>
    </div>
  </div>
</template>