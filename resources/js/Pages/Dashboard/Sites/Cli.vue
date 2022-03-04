<template>
  <AppHead title="CLI" />

  <DashboardMain>
    <template #header>Cli - {{ record.data.name }}</template>

    <div class="my-y rounded-xl shadow overflow-hidden">
      <highlightjs language='bash' :code="output" />
    </div>
  </DashboardMain>
</template>

<script setup>
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";
import {Inertia} from "@inertiajs/inertia";
import {onMounted} from "vue";

let props = defineProps({ record: Object, output: String });

const fetchData = () => {
  Inertia.reload({
    preserveState: true,
    preserveScroll: true,
  });
};

// Fetch data on mount (Lazy loaded)
onMounted(() => {
  fetchData();
});

const reloadInterval = setInterval(() => {
  fetchData();
}, 10000);
</script>
