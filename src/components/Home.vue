<template>
  <div class="container">
    <div class="flex items-center justify-start">
      <button prim type="button" @click="openModal">Add Task</button>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
      <Task v-for="task in tasks" :task="task" />
    </div>
  </div>

  <Modal>
    <AddTask />
  </Modal>
</template>

<script lang="ts" setup>
import { useStore } from "../state/store";

const store = useStore()
const tasks = store.state.tasks;

const openModal = () => {
  store.commit("openModal")
}
</script>
