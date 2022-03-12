<template>
  <AppHead title="Sites" />

  <DashboardMain>
    <template #header>Sites</template>
    <template #buttons>
      <Button :href="$route(table.actions.create.link)">New site</Button>
    </template>
    <template #sub-header></template>
    <template #sub-header-content>
      <Stats :stats="stats" />
    </template>

    <Table
      :records="records"
      :filters="filters"
      endpoint="/dashboard/sites"
      :fields="table.fields"
      :actions="table.actions"
    />
  </DashboardMain>
</template>

<script setup>
import Table from "@/Components/Table";
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";
import Stats from "@/Components/stats";
import Button from "@/Components/Button";

defineProps({ records: Object, filters: Object, table: Object, stats: Object });
</script>
