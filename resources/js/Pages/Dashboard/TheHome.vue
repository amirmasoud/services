<script setup>
import AppHead from "@/Components/AppHead.vue";
import DashboardMain from "@/Components/DashboardMain.vue";
import Stats from "@/Components/stats.vue";
import route from "ziggy-js";
import MenuBar from "@/Components/Core/MenuBar.vue";

defineProps({
  stats: Object,
  diff_1: Object,
  diff_2: Object,
});
</script>
<template>
  <AppHead title="Home"/>

  <MenuBar/>

  <DashboardMain>
    <template #header>Home</template>
    <template #sub-header-content>
      <Stats :stats="stats"/>
    </template>

    <Link :href="route('logout')" as="button" method="post">Logout</Link>
  </DashboardMain>
</template>
