<template>
  <div class="container h-200vh">
    <button prim @click="openModal">Open</button>
    <button prim @click="closeModal">Close</button>

    <Modal ref="modal">
      <!-- <DatePicker /> -->
      <AddTask />
    </Modal>

    <DateInput />
  </div>
</template>
<script lang="ts" setup>
ref: modal = undefined as any

const openModal = () => modal.open()
const closeModal = () => modal.close()
</script>

