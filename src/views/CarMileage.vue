<script setup lang="ts">
import { useAuthStore, useCarsStore } from '@/stores';
import CAppBar from '../components/CAppBar.vue'
import CCarElement from '../components/CCarElement.vue'
import { NButton, NTimeline, NTimelineItem } from 'naive-ui';
import router from '@/router';

const { demo } = useAuthStore()


const car = demo? useCarsStore().demoCars.find( car => car.id === router.currentRoute.value.params.id ) : useCarsStore().cars.find( car => car.id === router.currentRoute.value.params.id )

</script>

<template>
  <div class="px-6">
    <CAppBar :screen-name="`${car?.brand} ${car?.model}`"/>
    <div class="flex flex-col gap-4">
      
  <n-timeline class="mb-4">
    <n-timeline-item
      v-for="item in car?.mileageHistory"
      :key="`${item.mileage}`"
      type="info"
      :title="`${item.mileage} км`"
      :content="item.reason"
      :time="item.date"
      line-type="dashed"
    />
  </n-timeline>
      <!-- <NButton text class="self-center"> Добавить запись </NButton> -->
      <NButton text class="self-center mb-8" @click="$router.back()"> Вернуться в меню </NButton>
    </div>
  </div>
</template>