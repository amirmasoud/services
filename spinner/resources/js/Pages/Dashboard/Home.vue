<template>
  <AppHead title="Home" />

  <DashboardMain>
    <template #header>Home</template>
    <template #sub-header-content>
      <Stats :stats="stats" />
    </template>
  </DashboardMain>
</template>

<script setup>
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";
import Stats from "@/Components/stats";

defineProps({
  stats: Object,
})
</script>
