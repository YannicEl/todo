<template>
  <div class="w-76 bg-white p-4 select-none">
    <div class="flex items-center justify-between">
      <div class="text-lg pl-2">
        <span class="font-bold mr-4">{{ monthStr }}</span>
        <span>{{ year }}</span>
      </div>

      <div class="flex items-center justify-between">
        <heroicons-solid:chevron-left
          @click="prevMonth"
          class="text-gray-400 text-2xl w-8 h-8 cursor-pointer rounded-full transition-all hover:bg-gray-200 mr-2"
        />
        <heroicons-solid:chevron-right
          @click="nextMonth"
          class="text-gray-400 text-2xl w-8 h-8 cursor-pointer rounded-full transition-all hover:bg-gray-200"
        />
      </div>
    </div>

    <!-- day labels -->
    <div class="grid place-items-center grid-cols-7 mt-3">
      <span v-for="day of weekdays" class="font-bold text-gray-900">{{ day }}</span>
    </div>

    <div class="grid gap-1 place-items-center grid-cols-7 mt-1">
      <!-- offset depending on the frst weekday -->
      <div v-if="startWeekday > 0" :class="['col-span-' + startWeekday]"></div>

      <button
        class="rounded-full transition-all hover:bg-gray-200 w-8 h-8 text-gray-700 grid place-items-center"
        :class="{ 'bg-blue-400 text-white font-bold': selectedDate.getDate() === day }"
        v-for="day in daysInMonth"
        :key="day"
        @click="input(day)"
      >{{ day }}</button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useContext } from "@vue/runtime-core";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

const weekdays = [
  "Mo",
  "Tu",
  "We",
  "Th",
  "Fr",
  "Sa",
  "So",
]

const ctx = useContext();
ref: selectedDate = new Date()
ref: year = new Date().getFullYear();
ref: month = new Date().getMonth();
ref: daysInMonth = computed(() => getDaysInMonth(year, month))
ref: startWeekday = computed(() => getStartDay(year, month));
ref: monthStr = computed(() => months[month])

const getDaysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate()
const getStartDay = (year: number, month: number) => new Date(year, month, 0).getDay()

const nextMonth = (): void => {
  month++
  if (month === 12) {
    month = 0;
    year++
  }
}

const prevMonth = (): void => {
  month--
  if (month === -1) {
    month = 11;
    year--
  }
}

// emit input date
const input = (day: number) => {
  const date = new Date(year, month, day)
  selectedDate = date
  console.log(selectedDate)
  ctx.emit("input", date)
}
</script>
