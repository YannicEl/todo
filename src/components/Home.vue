<template>
  <div class="container">
    <AddTask />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-2">
      <Task v-for="task in tasks" :task="task" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "../state/store";

const store = useStore()
const tasks = store.state.tasks;

const openModal = () => {
  store.commit("openModal")
}
</script>
