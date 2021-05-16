<template>
  <form @submit.prevent="checkForm" class="grid gap-4" :class="{ error: error }">
    <input type="text" v-model="title" placeholder="Title" class="rounded-md" />
    <DateInput v-model="date" />
    <input type="text" v-model="subtasks" placeholder="Task" class="rounded-md" />
    <button prim>Add Task</button>
  </form>
</template>

<script lang="ts" setup>
import { useStore } from "../state/store";

const store = useStore()
ref: title = "";
ref: date = new Date();
ref: subtasks = "";
ref: error = false;


const checkForm = () => {
  if (!title || !date || !subtasks) {
    error = true
    return;
  }

  store.commit("addTask", {
    title, date, subtasks: [subtasks]
  })
}
</script>

