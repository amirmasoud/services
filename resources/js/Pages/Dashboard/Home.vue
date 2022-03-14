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
import { defineProps } from "vue";

defineProps({
  stats: Object,
});
</script>
