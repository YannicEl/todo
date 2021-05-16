<template>
  <input
    class="rounded-md"
    id="origin"
    ref="origin"
    type="text"
    v-model="selectedDate"
    @focus="onFocus"
    placeholder="Date"
    readonly
  />
  <Modal ref="modal" originSelector="origin">
    <DatePicker @input="input" />
  </Modal>
</template>

<script lang="ts" setup>
import { computed, useContext } from '@vue/runtime-core';
import { useWindowScroll } from '@vueuse/core'
import { defineProps, toRefs, watch } from 'vue';

ref: modal = undefined as any
ref: origin = undefined as HTMLInputElement | undefined

const props = defineProps({ modelValue: { type: Date } })
const { modelValue } = toRefs(props)

ref: selectedDate = computed(() => {
  console.log()
  const date = modelValue?.value;
  if (date) {
    return `${date.getDate()}.${date?.getMonth() + 1}.${date?.getFullYear()}`
  } else {
    return ""
  }
})

// Close modal on scroll
const { x, y } = useWindowScroll()
watch([x, y], () => {
  modal.getIsOpen() && modal.close()
  origin?.blur()
})

// emit input event on date select
const ctx = useContext();
const input = (date: Date) => {
  closeModal()
  ctx.emit("update:modelValue", date)
}

const closeModal = () => modal.close()

// open modal on focus
const onFocus = () => modal.open()
</script>