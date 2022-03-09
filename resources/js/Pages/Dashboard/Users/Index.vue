<template>
  <AppHead title="Users" />

  <DashboardMain>
    <template #header>Users</template>
    <template #buttons>
      <Button :href="$route(table.actions.create.link)">New user</Button>
    </template>
    <template #sub-header></template>
    <template #sub-header-content>
      <Stats :stats="stats" />
    </template>

    <Table
      :records="records"
      :filters="filters"
      endpoint="/dashboard/users"
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
