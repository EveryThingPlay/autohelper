<script setup lang="ts">
import { useAuthStore, useCarsStore } from '@/stores';
import CAppBar from '../components/CAppBar.vue'
import CCarElement from '../components/CCarElement.vue'
import { NButton } from 'naive-ui';
import { computed } from 'vue';


console.log("cars")

const { cars, demoCars } = useCarsStore()
const { demo } = useAuthStore()

console.log(cars)

const carsList = computed(()=> {
  return demo ? demoCars : cars
})

</script>

<template>
  <div class="px-6">
    <CAppBar tertiary screen-name="Мои автомобили"/>
    <div class="flex flex-col gap-4">
      <div class="list flex flex-col gap-4 mb-6">
        <CCarElement :title="`${car.brand} ${car.model}`" :mileage="car.mileageHistory[car.mileageHistory.length]?.mileage" :lastService="car.lastService.locale('ru').format('DD.MM.YYYY')" :lastServiceMileage="car.lastServiceMileage" v-for="car of carsList" :key="car.id" :type="car.type" @click="$router.push(`/car/${car.id}`)"/>
      </div>
      
      <NButton text class="self-center" @click="$router.push('/cars/add')"> Добавить автомобиль </NButton>
      <NButton text class="self-center" @click="$router.push('/')"> Выйти из аккаунта </NButton>
    </div>
  </div>
</template>