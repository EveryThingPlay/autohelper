import { defineStore } from "pinia";
import dayjs, { Dayjs } from "dayjs";
import { ref, type Ref } from "vue";

type MileageHistoryBlock = {
  date: string;
  mileage: number;
  reason: string
}

type car = {
  id: string|number;
  brand: string;
  model: string;
  year: number;
  mileageHistory: Array<MileageHistoryBlock>;
  fuel: '92'|'95'|'98'|'D'|'electric'|'other',
  type: 'sedan'|'suv'|'van',
  vin: string,
  lastService: Dayjs,
  lastServiceMileage: number,
  price?: number,
  comment?: string
}

export const useCarsStore = defineStore('cars', () => {
  const demoCars = ref([
    {
      id: 'demo1',
      brand: 'BMW',
      model: '530d G30',
      fuel: 'D',
      mileageHistory: [
        {
          mileage: 4798,
          reason: "Запись вручную",
          date: '12.02.2022'
        },
        {
          mileage: 12958,
          reason: "Плановое ТО",
          date: '17.05.2022'
        },
        {
          mileage: 19873,
          reason: "Плановое ТО",
          date: '03.08.2022'
        },
        {
          mileage: 26748,
          reason: "Плановое ТО",
          date: '24.11.2022'
        },
        {
          mileage: 33578,
          reason: "Плановое ТО",
          date: '27.01.2023'
        },
        {
          mileage: 41937,
          reason: "Плановое ТО",
          date: '26.03.2023'
        },
        {
          mileage: 49823,
          reason: "Плановое ТО",
          date: '28.06.2023'
        },
        {
          mileage: 57093,
          reason: "Плановое ТО",
          date: '12.09.2023'
        },
        {
          mileage: 66295,
          reason: "Плановое ТО",
          date: '12.02.2022'
        },
        {
          mileage: 73583,
          reason: "Плановое ТО",
          date: '12.02.2022'
        },
        {
          mileage: 80984,
          reason: "Неисправность",
          date: '12.02.2022'
        },
        {
          mileage: 89480,
          reason: "Запись вручную",
          date: '12.02.2022'
        },
      ],
      color: 'black',
      type: 'sedan',
      year: 2019,
      vin: '000000000',
      lastService: dayjs('05.04.2024'),
      lastServiceMileage: 89480
    },
    {
      id: 'demo2',
      brand: 'Volkswagen',
      model: 'Caravelle',
      fuel: 'D',
      mileageHistory: [
        {
          mileage: 4798,
          reason: "Запись вручную",
          date: '12.02.2022'
        },
        {
          mileage: 12958,
          reason: "Плановое ТО",
          date: '17.05.2022'
        },
        {
          mileage: 19873,
          reason: "Плановое ТО",
          date: '03.08.2022'
        },
        {
          mileage: 26748,
          reason: "Плановое ТО",
          date: '24.11.2022'
        },
        {
          mileage: 33578,
          reason: "Плановое ТО",
          date: '27.01.2023'
        },
        {
          mileage: 41937,
          reason: "Плановое ТО",
          date: '26.03.2023'
        },
        {
          mileage: 49823,
          reason: "Плановое ТО",
          date: '28.06.2023'
        },
        {
          mileage: 57093,
          reason: "Плановое ТО",
          date: '12.09.2023'
        },
        {
          mileage: 66295,
          reason: "Плановое ТО",
          date: '12.02.2022'
        },
        {
          mileage: 73583,
          reason: "Плановое ТО",
          date: '12.02.2022'
        },
        {
          mileage: 80984,
          reason: "Неисправность",
          date: '12.02.2022'
        },
        {
          mileage: 89480,
          reason: "Запись вручную",
          date: '12.02.2022'
        },
      ],
      type: 'van',
      year: 2016,
      vin: '000000000',
      lastService: dayjs('05.04.2024'),
      lastServiceMileage: 89480
    },
    {
      id: 'demo3',
      brand: 'Toyota',
      model: 'Land Cruiser 200',
      mileageHistory: [
        {
          mileage: 4798,
          reason: "Запись вручную",
          date: '12.02.2022'
        },
        {
          mileage: 12958,
          reason: "Плановое ТО",
          date: '17.05.2022'
        },
        {
          mileage: 19873,
          reason: "Плановое ТО",
          date: '03.08.2022'
        },
        {
          mileage: 26748,
          reason: "Плановое ТО",
          date: '24.11.2022'
        },
        {
          mileage: 33578,
          reason: "Плановое ТО",
          date: '27.01.2023'
        },
        {
          mileage: 41937,
          reason: "Плановое ТО",
          date: '26.03.2023'
        },
        {
          mileage: 49823,
          reason: "Плановое ТО",
          date: '28.06.2023'
        },
        {
          mileage: 57093,
          reason: "Плановое ТО",
          date: '12.09.2023'
        },
        {
          mileage: 66295,
          reason: "Плановое ТО",
          date: '12.02.2022'
        },
        {
          mileage: 73583,
          reason: "Плановое ТО",
          date: '12.02.2022'
        },
        {
          mileage: 80984,
          reason: "Неисправность",
          date: '12.02.2022'
        },
        {
          mileage: 89480,
          reason: "Запись вручную",
          date: '12.02.2022'
        },
      ],
      fuel: '98',
      type: 'suv',
      year: 2012,
      vin: '000000000',
      lastService: dayjs('05.04.2024'),
      lastServiceMileage: 89480
    },
  ]) as Ref<car[]>

  const cars = [] as car[]

  return { demoCars, cars }
})