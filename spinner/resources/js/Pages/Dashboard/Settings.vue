<template>
  <AppHead title="Settings" />

  <h1 class="text-2xl font-semibold text-gray-900 mb-6">
    Settings
  </h1>

    Some returns <span v-html="test"></span>
</template>

<script setup>
import AppHead from "@/Components/AppHead";

defineProps({ test: String });
</script>
