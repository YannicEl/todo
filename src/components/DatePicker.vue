<template>
  <div class="w-85 bg-blue-100 p-4 rounded-lg">
    <div class="flex items-center justify-between">
      <button prim @click="prevMonth">&lt</button>
      <button prim @click="year--">-</button>
      <div>{{ monthStr }} {{ year }}</div>
      <button prim @click="year++">+</button>
      <button prim @click="nextMonth">&gt</button>
    </div>

    <div class="grid gap-1 grid-cols-7 mt-2">
      <!-- day labels -->
      <span class="text-center">Mo</span>
      <span class="text-center">Tu</span>
      <span class="text-center">We</span>
      <span class="text-center">Th</span>
      <span class="text-center">Fr</span>
      <span class="text-center">Sa</span>
      <span class="text-center">So</span>

      <!-- offset depending on the frst weekday -->
      <div v-if="startWeekday > 0" :class="['col-span-' + startWeekday]"></div>

      <a
        class="bg-blue-200 rounded-full transition-all hover:bg-blue-400 w-10 h-10 text-white grid place-items-center"
        v-for="day in daysInMonth"
        :key="day"
        @click="select(day)"
      >{{ day }}</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, useContext } from "@vue/runtime-core";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
]

const ctx = useContext();
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

// emit selected date
const select = (day: number): void => ctx.emit("select", new Date(year, month, day))
</script>
