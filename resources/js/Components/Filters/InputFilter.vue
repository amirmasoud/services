<template>
  <label :for="filter.name" class="block text-sm font-medium text-gray-700">{{
    filter.label
  }}</label>
  <div class="relative rounded-md shadow-sm">
    <Input
      :id="filter.name"
      v-model="filter.value"
      type="text"
      name="search"
      class="focus:ring-indigo-500 focus:border-indigo-500 block w-full px-2 sm:text-sm border-gray-300 rounded-md"
      :placeholder="filter.label"
    />
  </div>
</template>

<script setup>
import Input from "@/Components/Forms/Inputs/Input";

defineProps({
  filter: Object,
});
</script>
