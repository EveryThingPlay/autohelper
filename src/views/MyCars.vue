<script setup lang="ts">
import CAppBar from '../components/CAppBar.vue'
import CCarElement from '../components/CCarElement.vue'
import { NButton } from 'naive-ui';

const cars = [{
  id: 1,
  title: "BMW 530d G30",
  mileage: 94860,
  lastService: "05.04.2024",
  lastServiceMileage: 89480,
}]

</script>

<template>
  <div class="px-6">
    <CAppBar screen-name="Мои автомобили"/>
    <div class="flex flex-col gap-4">
      <div class="list flex flex-col gap-4 mb-6">
        <CCarElement :title="car.title" :mileage="car.mileage" :lastService="car.lastService" :lastServiceMileage="car.lastServiceMileage" v-for="car in cars" :key="car.id" @click="$router.push('/car/demo')"/>
      </div>
      <NButton text class="self-center" @click="$router.push('/')"> Выйти из аккаунта </NButton>
    </div>
  </div>
</template>