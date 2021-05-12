<template>
  <div class="rounded-lg px-6 py-4 cursor-pointer transition-all shadow-md hover:shadow-lg">
    <h1 class="text-2xl font-bold text-black">{{ task.days }} days</h1>

    <button @click="remove(task.id)">remove</button>

    <form class="grid gap-3 mt-4">
      <label
        v-for="task in task.subtasks"
        :key="task.id"
        :for="task.id"
        class="flex items-center p-2 rounded-lg transition-all bg-blue bg-opacity-0 hover:bg-opacity-10 cursor-pointer"
      >
        <input
          type="checkbox"
          v-model="task.completed"
          :id="task.id"
          :name="task.id"
          class="ring-blue"
        />
        <span class="ml-2">{{ task.label }}</span>
      </label>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, toRefs } from 'vue';
import { useStore } from '../state/store';

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})
const { task } = toRefs(props);

const store = useStore()

const remove = (taskId: string) => {
  store.commit("removeTask", taskId)
}
</script>
