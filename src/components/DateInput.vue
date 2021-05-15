<template>
  <input class="w-full" v-model="selectedDate" type="text" />
  <DatePicker ref="datepicker" @select="select" />
</template>

<script lang="ts" setup>
import { ref } from 'vue';

ref: selectedDate = "";

const select = (date: Date) => {
  selectedDate = date.toISOString()
}
</script>