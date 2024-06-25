<script setup lang="ts">
import { mdiArrowLeft, mdiPlusBox } from '@mdi/js';
// @ts-ignore: JS Dep
import SvgIcon from '@jamescoyle/vue-icon';
import { useAuthStore, useCarsStore } from '@/stores';
import CAppBar from '../components/CAppBar.vue'
import { NButton, NTimeline, NTimelineItem, NModal, NCard, NInputNumber } from 'naive-ui';
import router from '@/router';
import { computed, ref } from 'vue';
import dayjs from 'dayjs';

const { demo } = useAuthStore()


const car = demo? useCarsStore().demoCars.find( car => car.id === router.currentRoute.value.params.id ) : useCarsStore().cars.find( car => car.id === router.currentRoute.value.params.id )
const isShowModal = ref(false)

const currentMileage = computed(()=> car?.mileageHistory[car?.mileageHistory.length - 1]?.mileage ||  0)

const newMileageValue = ref(currentMileage.value+1)
const isValid = (x: number) => x > currentMileage.value+1

function addMileage(){
  car?.mileageHistory.push({mileage: newMileageValue.value, date: dayjs().format('YYYY.MM.DD'), reason: 'Запись вручную'})
  isShowModal.value = false
}

</script>

<template>
  <div class="px-6">
    <CAppBar :screen-name="`${car?.brand} ${car?.model}`"/>
      <n-button text  @click="$router.back()">
        <template #icon>
          <svg-icon :path="mdiArrowLeft" type="mdi"/>
        </template>
        Назад
      </n-button>
    <div class="flex flex-col gap-4">
      
  <n-timeline class="my-4">
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
      <NButton text class="self-center mb-12" @click="isShowModal=true">
        <template #icon>
          <svg-icon :path="mdiPlusBox" type="mdi"/>
        </template>
        Добавить запись
      </NButton>
    </div>
    <n-modal v-model:show="isShowModal">
      <n-card
        title="Добавить запись о пробеге"
        :bordered="false"
        size="huge"
        role="dialog"
        aria-modal="true"
      >
        <div class="mb-1">Укажите пробег в километрах</div>
        <n-input-number size="large" v-model:value="newMileageValue" :validator="isValid"></n-input-number>
        <template #footer>
          <div class="flex flex-row justify-between">
            <n-button text size="large" @click="isShowModal = false">Отмена</n-button>
            <n-button size="large" @click="addMileage">Добавить запись</n-button>
          </div>
        </template>
      </n-card>
  </n-modal>
  </div>
</template>