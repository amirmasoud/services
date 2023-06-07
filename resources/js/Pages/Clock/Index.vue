<template>
  <p>
    Diff 1 {{ diff_1?.y }} year {{ diff_1?.m }} months {{ diff_1?.d }} days {{ diff_1?.h }} hours {{ diff_1?.i }}
    minutes
  </p>
  <p>
    Diff 2 {{ diff_2?.y }} year {{ diff_2?.m }} months {{ diff_2?.d }} days {{ diff_2?.h }} hours {{ diff_2?.i }}
    minutes
  </p>
  <p v-for="clock in clocks" :key="clock.id">
    {{clock.timezone}}
    {{clock.carbon}}
  </p>
</template>
<script setup>
import {onUnmounted} from "vue";
import {router} from "@inertiajs/vue3";

defineProps({
  diff_1: String,
  diff_2: String,
  clocks: Array
})
onUnmounted(() => {
  setInterval(() => router.reload(), 60 * 1000)
})
</script>