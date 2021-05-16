<template>
  <div class="container">
    <AddTask class="lg:max-w-sm mt-6" />

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
      <Task v-for="task in tasks" :task="task" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "../state/store";

const store = useStore()
const tasks = store.state.tasks;
</script>
