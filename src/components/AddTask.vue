<template>
  <form @submit="checkForm" class="grid gap-4" :class="{ error: error }">
    <h1>Add Task</h1>
    <input type="text" v-model="title" placeholder="Title" class="rounded-md" />
    <DateInput />
    <input type="number" v-model="days" placeholder="Days" class="rounded-md" />
    <input type="text" v-model="subtasks" placeholder="Task" class="rounded-md" />
    <button prim>Add Task</button>
  </form>
</template>

<script lang="ts" setup>
import { useStore } from "../state/store";

const store = useStore()
ref: title = "";
ref: days = "";
ref: subtasks = "";
ref: error = false;


const checkForm = (event: Event) => {
  event.preventDefault()

  if (!title || !days || !subtasks) {
    error = true
    return;
  }

  store.commit("addTask", {
    title, days, subtasks: [subtasks]
  })

  closeModal()
}

const closeModal = () => {
  store.commit("closeModal")
}


</script>

