<template>
  <div class="container">
    <button prim @click="openModal">Open</button>
    <button prim @click="closeModal">Close</button>

    <Modal ref="modal">
      <!-- <DatePicker /> -->
      <AddTask />
    </Modal>
  </div>
</template>
<script lang="ts" setup>
ref: modal

const openModal = () => modal.open()
const closeModal = () => modal.close()
</script>

