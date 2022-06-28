<template>
  <AppHead title="Users"/>

  <DashboardMain>
    <template #header>Users</template>
    <template #buttons>
      <Button :href="$route(table.actions.create.link)">New role</Button>
    </template>
    <template #sub-header></template>
    <template #sub-header-content>
      <Stats :stats="stats"/>
    </template>

    <Table
      :actions="table.actions"
      :endpoint="$route('dashboard.users.roles.index')"
      :fields="table.fields"
      :filters="filters"
      :records="records"
    />
  </DashboardMain>
</template>

<script setup>
import AppHead from "@/Components/AppHead";
import Button from "@/Components/Button";
import DashboardMain from "@/Components/DashboardMain";
import Stats from "@/Components/stats";
import Table from "@/Components/Table";

defineProps({records: Object, filters: Object, table: Object, stats: Object});
</script>
