<template>
  <label :for="filter.name" class="block text-sm font-medium text-gray-700">{{ filter.label }}</label>
  <div class="relative rounded-md shadow-sm">
    <input type="text" name="search" :id="filter.name" class="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 sm:text-sm border-gray-300 rounded-md" :placeholder="filter.label" v-model="filter.value">
  </div>
</template>

<script setup>
defineProps({
  filter: Object,
})
</script>
