<template>
  <Head>
    <title>Media - Settings</title>
  </Head>
  <h1 class="text-2xl font-semibold text-gray-900 mb-6">
    Settings
  </h1>

    Some returns <span v-html="test"></span>
</template>

<script setup>
defineProps({ test: String });
</script>
