<template>
  <Teleport to="#overlay-target">
    <transition name="fade">
      <div class="absolute inset-0" v-if="isOpen">
        <!-- backdrop -->
        <div class="absolute inset-0 pointer-events-auto z-1000" @click="close"></div>

        <div
          class="absolute inset-0 z-1000 pointer-events-none"
          :class="{ 'grid place-items-center': !origin }"
        >
          <!-- place modal at origin -->
          <div
            v-if="origin"
            class="absolute z-1000 pointer-events-auto shadow-2xl rounded-lg overflow-hidden"
            :style="{ left: x + offsetX + 'px', top: y + offsetY + 'px' }"
          >
            <slot></slot>
          </div>

          <!-- place modal in the center of the screen -->
          <div
            v-else="origin"
            class="static z-1000 pointer-events-auto shadow-2xl rounded-lg overflow-hidden"
          >
            <slot></slot>
          </div>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, defineProps, toRefs, useContext } from "vue";

const props = defineProps({
  originSelector: { type: String },
  offsetX: { type: Number, default: 0 },
  offsetY: { type: Number, default: 10 }
})
const { originSelector, offsetX } = toRefs(props)

ref: isOpen = false;

ref: origin = computed(() => {
  const selector = originSelector?.value
  if (selector) {
    return document.getElementById(selector)
  }
})

ref: x = computed(() => origin?.getBoundingClientRect().left || 0);
ref: y = computed(() => origin?.getBoundingClientRect().bottom || 0);

const close = () => isOpen = false
const open = () => isOpen = true
const getIsOpen = () => isOpen;

useContext().expose({
  open,
  close,
  getIsOpen
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