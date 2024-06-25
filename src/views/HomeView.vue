<script setup lang="ts">
import { mdiAccount } from '@mdi/js';
// @ts-ignore: JS Dep
import SvgIcon from '@jamescoyle/vue-icon';
import router from '@/router';


</script>

<template>
  <div>
    <div class="flex flex-row justify-between items-center gap-6 p-6">
      <div class="flex flex-col gap-2">
        <img src="/Logo.svg" class="w-56"/>
        <span>Ваш помощник на дороге</span>
      </div>
      <button class="flex flex-col items-center align-center text-gray-400 active:text-gray-500 duration-75" @click="router.push('/auth/login')">
        <SvgIcon type="mdi" :path="mdiAccount"/>
        <span class="text-xs"> Авторизация </span>
      </button>
    </div>
    <div>
      <img type="image/png" src="/bmw.png" class="mt-20 ml-auto">
      <div class="mt-8 px-6 flex flex-col gap-2">
        <span class="text-3xl font-semibold text-white"> Добро пожаловать! </span>
        <span>Приложение Autohelper создано в рамках выполнения выпускной квалификационной работы и предназначено для предоставления на рынке программного обеспечения приложения-помощника всем людям, имеющим в своем пользовании транспортные средства.
          Основной задачей приложения является помощь
автовладельцам в мониторинге эксплуатационных параметрах транспортного
средства. Приложение предоставляет возможность всем пользователям в контроле состояния автомобиля, расхода топлива на различной дистанции и временном отрывке, мониторинге состояния агрегатов ТС, а также в хранении и анализе финансовых затрат на транспортные расходы.
</span>
      </div>
    </div>
  </div>
</template>
