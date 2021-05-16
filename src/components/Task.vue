<template>
  <div class="relative rounded-lg px-6 py-4 transition-all shadow-md hover:shadow-lg">
    <button
      class="absolute top-4 right-4 w-8 h-8 rounded-full text-red-600 transition-all hover:bg-red-200 grid place-items-center font-bold"
      @click="remove(task.id)"
    >X</button>

    <h1 class="text-2xl font-bold text-black">{{ daysLeft }} days left</h1>

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
import { computed, defineProps, toRefs } from 'vue';
import { useStore } from '../state/store';

const props = defineProps({
  task: {
    type: Object,
    required: true
  }
})
const { task } = toRefs(props);

ref: daysLeft = computed(() => {
  const dueDate = new Date(task.value.date)
  const now = new Date()

  const diffMs = dueDate.getTime() - now.getTime()
  const diffDays = diffMs / (24 * 60 * 60 * 1000)
  return diffDays.toFixed()
})

const store = useStore()
const remove = (taskId: string) => {
  store.commit("removeTask", taskId)
}
</script>
