<template>
  <AppHead title="Settings" />

  <DashboardMain>
    <template #header>Settings</template>

    <ul class="list-inside ...">
      <li>Docker is <span v-if="! info">not</span> running</li>
      <li>Traefik proxy is <span v-if="! proxy">not</span> running</li>
    </ul>
  </DashboardMain>
</template>

<script setup>
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";
import {Inertia} from "@inertiajs/inertia";
import {onBeforeUnmount, onMounted} from "vue";

defineProps({
  info: Boolean,
  proxy: Boolean,
});

const fetchData = () => {
  Inertia.reload({
    preserveState: true,
    preserveScroll: true,
    only: ["info", "proxy"],
  });
};

onMounted(() => {
  fetchData();
});

const reloadInterval = setInterval(() => {
  fetchData();
}, 10000);

onBeforeUnmount(() => {
  clearInterval(reloadInterval);
});
</script>
