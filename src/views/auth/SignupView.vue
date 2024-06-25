<script setup lang="ts">
import { useAuthStore } from '@/stores';
import { NInput, NButton } from 'naive-ui'
import { reactive, computed } from 'vue';

const credentials = reactive({
  username: '',
  email: '',
  password: '',
  repeat_password: ''
})

const isButtonActive = computed(()=>{
  return (credentials.password === credentials.repeat_password)
  && (credentials.username && credentials?.email && credentials?.password)
})

</script>

<template>
  <div class="p-6">
    <div class="flex flex-row justify-between items-center gap-6 header">
      <div class="flex flex-col gap-2">
        <img src="/Logo.svg" class="w-56"/>
        <span>Ваш помощник на дороге</span>
      </div>
    </div>
    <div>
      <h1 class="mt-40 text-4xl font-bold text-gray-200">Регистрация</h1>
      <div class="flex flex-col justify-center mt-12 gap-4">
        <NInput size="large" placeholder="Как к вам обращаться?" id="autohelper-email" v-model:value="credentials.email"/>
        <NInput size="large" placeholder="Электронная почта" id="autohelper-email" v-model:value="credentials.email"/>
        <NInput size="large" placeholder="Пароль" type="password" id="autohelper-password" v-model:value="credentials.password"/>
        <NInput size="large" placeholder="Повторите пароль" type="password" id="autohelper-password" v-model:value="credentials.password"/>
        <NButton size="large" tertiary :disabled="!(credentials?.email && credentials?.password)" @click="useAuthStore().demo = false; $router.push('/cars')"> Продолжить</NButton>
        <span class="text-sm self-center mt-12">Уже есть аккаунт?</span>
        <NButton size="large" @click="$router.push('/auth/login')">Войдите</NButton>
        <NButton size="large" text @click="useAuthStore().demo = true; $router.push('/cars')">Попробовать демо-режим </NButton>
      </div>
    </div>
  </div>
</template>
