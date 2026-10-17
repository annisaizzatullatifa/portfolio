<script setup>
import { RouterView } from 'vue-router'

const handleAfterLeave = () => {
  window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
}
</script>

<template>
  <div class="min-h-screen bg-[#0a0a0a] text-white">
    <RouterView v-slot="{ Component }">
      <Transition name="cinema-fade" mode="out-in" @after-leave="handleAfterLeave">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </div>
</template>

<style>
/* Cinematic Quick Scene Fade (200ms) */
.cinema-fade-enter-active,
.cinema-fade-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.cinema-fade-enter-from,
.cinema-fade-leave-to {
  opacity: 0;
}
</style>



