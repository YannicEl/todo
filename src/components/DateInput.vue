<template>
  <Popover>
    <PopoverButton class="w-full">
      <input class="w-full" v-model="selectedDate" type="text" />
    </PopoverButton>

    <transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="translate-y-1 opacity-0"
      enter-to-class="translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="translate-y-0 opacity-100"
      leave-to-class="translate-y-1 opacity-0"
    >
      <PopoverPanel class="absolute z-10 mt-2">
        <DatePicker ref="datepicker" @select="select" />
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

ref: selectedDate = "";

const select = (date: Date) => {
  selectedDate = date.toISOString()
}
</script>