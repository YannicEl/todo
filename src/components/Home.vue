<template>
  <div class="flex flex-col items-center justify-center">
    <h1 class="font-bold text-4xl">Home</h1>

    <p>{{ count }}</p>

    <button class="bg-blue-500 text-white py-2 px-4 rounded-md" @click="increment">+ 1</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";


let count = ref(0);

const increment = () => {
  count.value++
}

</script>
