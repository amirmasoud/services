<script setup>
import AppHead from "@/Components/AppHead.vue";
import DashboardMain from "@/Components/DashboardMain.vue";
import Stats from "@/Components/stats.vue";
import route from "ziggy-js";

defineProps({
  stats: Object,
  diff_1: Object,
  diff_2: Object,
});
</script>
<template>
  <AppHead title="Home"/>

  <DashboardMain>
    <template #header>Home</template>
    <template #sub-header-content>
      <Stats :stats="stats"/>
    </template>
    {{ diff_1?.y }} years {{ diff_1?.m }} month {{ diff_1?.d }} days {{ diff_1?.h }} hours {{ diff_1?.i }} minutes
    {{ diff_1?.s }} seconds
    <br/>
    {{ diff_2?.y }} years {{ diff_2?.m }} month {{ diff_2?.d }} days {{ diff_2?.h }} hours {{ diff_2?.i }} minutes
    {{ diff_2?.s }} seconds
    <br/>
    <Link :href="route('logout')" as="button" method="post">Logout</Link>
  </DashboardMain>
</template>
