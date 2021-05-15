<template>
  <Teleport to="#overlay-target">
    <transition name="fade">
      <div class="absolute inset-0" v-if="isOpen">
        <!-- backdrop -->
        <div class="absolute inset-0 pointer-events-auto z-1000" @click="close"></div>

        <div class="absolute inset-0 z-1000 pointer-events-none flex items-center justify-center">
          <div class="static z-1000 pointer-events-auto shadow-2xl rounded-lg overflow-hidden">
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { useContext } from "vue";

ref: isOpen = false;

const close = () => isOpen = false
const open = () => isOpen = true

useContext().expose({
  open,
  close,
})
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  @apply transition-all;
}

.fade-enter-from,
.fade-leave-to {
  @apply opacity-1 transform translate-y-[10px];
}
</style>