<template>
  <slot />
</template>

<script setup>
import { CheckIcon, XIcon } from "@heroicons/vue/solid";
import { reactive } from "vue";

let state = reactive({
  closed: false,
});
</script>
