<script setup lang="ts">
import { mdiArrowLeft  } from '@mdi/js';
// @ts-ignore: JS Dep
import SvgIcon from '@jamescoyle/vue-icon';
import router from '@/router';

import { NButton } from 'naive-ui'
</script>

<template>
  <div class="p-6">
    <n-button text  @click="$router.push('/cars')">
      <template #icon>
        <svg-icon :path="mdiArrowLeft" type="mdi"/>
      </template>
      Мои машины
    </n-button>
  </div>
</template>