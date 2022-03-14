<template>
  <component
    :is="href ? 'Link' : 'button'"
    :type="href ? null : type"
    :disabled="href ? null : processing"
    :href="href ? href : null"
    :class="`inline-flex items-center py-2 px-3 text-sm font-medium leading-4 text-white bg-${color}-600 hover:bg-${color}-700 rounded-md border border-transparent focus:ring-2 focus:ring-${color}-500 focus:ring-offset-2 shadow-sm disabled:opacity-50 disabled:cursor-wait focus:outline-none`"
  >
    <TransitionRoot
      id="button-spinner"
      :show="processing"
      enter="transition-opacity duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      <Spinner class="w-4 h-4" />
    </TransitionRoot>
    <slot />
  </component>
</template>

<script setup>
import Spinner from "@/Components/Icons/Spinner";
import { TransitionRoot } from "@headlessui/vue";

let props = defineProps({
  type: {
    type: String,
    default: "button",
  },
  processing: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: "indigo",
  },
  href: {
    type: String,
    default: null,
  },
});
</script>
