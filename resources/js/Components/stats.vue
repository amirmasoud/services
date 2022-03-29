<template>
  <div>
    <h3 class="text-lg leading-6 font-medium text-gray-900">Last 30 days</h3>
    <dl
      class="mt-5 grid grid-cols-1 rounded-lg bg-white overflow-hidden shadow divide-y divide-gray-200 md:grid-cols-3 md:divide-y-0 md:divide-x"
    >
      <div v-for="item in stats" :key="item.name" class="px-4 py-5 sm:p-6">
        <dt class="text-base font-normal text-gray-900">
          {{ item.name }}
        </dt>
        <dd class="mt-1 flex justify-between items-baseline md:block lg:flex">
          <div
            class="flex items-baseline text-2xl font-semibold text-indigo-600"
          >
            {{ item.stat }}
            <span class="ml-2 text-sm font-medium text-gray-500">
              from {{ item.previousStat }}
            </span>
          </div>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
import { ArrowSmDownIcon, ArrowSmUpIcon } from "@heroicons/vue/solid";

defineProps({
  stats: Object,
});
</script>
