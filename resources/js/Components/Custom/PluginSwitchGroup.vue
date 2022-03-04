<template>
  <SwitchGroup as="div" class="flex items-center justify-between mb-2">
      <span class="flex-grow flex flex-col">
        <SwitchLabel v-html="name" as="span" class="text-sm font-medium text-gray-900" passive></SwitchLabel>
        <SwitchDescription as="span" class="text-sm text-gray-500">
          <div class="flex items-center">
            <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating" :class="[rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']" aria-hidden="true" />
            <span class="text-gray-500">({{ num_ratings }})</span>
          </div>
        </SwitchDescription>
      </span>
    <Switch v-model="isEnabled" :class="[enabled ? 'bg-indigo-600' : 'bg-gray-200', 'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500']">
      <span aria-hidden="true" :class="[enabled ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200']" />
    </Switch>
  </SwitchGroup>
</template>

<script setup>
import { Switch, SwitchDescription, SwitchGroup, SwitchLabel } from '@headlessui/vue';
import { StarIcon } from "@heroicons/vue/solid";

let props = defineProps({ name: String, rating: Number, num_ratings: Number});

const plugins = ref([]);
</script>