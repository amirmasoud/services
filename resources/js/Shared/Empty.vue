<template>
  <div v-if="$page.props.flash.message && !state.closed" class="bg-green-600">
    <div class="py-3 px-3 sm:px-6 lg:px-8 mx-auto max-w-7xl">
      <div class="flex flex-wrap justify-between items-center">
        <div class="flex flex-1 items-center w-0">
          <span class="flex p-2 bg-green-800 rounded-lg">
            <CheckIcon class="w-6 h-6 text-white" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span>
              {{ $page.props.flash.message }}
            </span>
          </p>
        </div>

        <div class="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
          <button
            type="button"
            class="flex p-2 -mr-1 sm:-mr-2 hover:bg-green-500 rounded-md focus:ring-2 focus:ring-white focus:outline-none"
            @click="state.closed = true"
          >
            <span class="sr-only">Dismiss</span>
            <XIcon class="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </div>
  </div>

  <slot />
</template>

<script setup>
import { CheckIcon, XIcon } from "@heroicons/vue/solid";
import { reactive } from "vue";

let state = reactive({
  closed: false,
});
</script>
