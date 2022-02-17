<template>
  <AppHead title="Settings" />

  <DashboardMain>
    <template #header>Settings</template>


    <ul class="list-inside ...">
      <li>Docker is <span v-if="! info">not</span> running</li>
    </ul>
  </DashboardMain>
</template>

<script setup>
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";
import {Inertia} from "@inertiajs/inertia";

defineProps({
  info: Boolean,
});

Inertia.reload();
</script>
