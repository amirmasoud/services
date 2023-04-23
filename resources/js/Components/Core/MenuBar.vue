<script setup>
import TheClock from "@/Components/Core/Clock/TheClock.vue"</script>
<template>
  <section class="core-menu-bar">
    <div></div>
    <TheClock class="text-sm flex items-center"/>
    <div></div>
  </section>
</template>
<style scoped>
.core-menu-bar {
  @apply bg-transparent h-7 flex m-1 rounded px-3;
  @apply flex justify-between items-center;
}
</style>