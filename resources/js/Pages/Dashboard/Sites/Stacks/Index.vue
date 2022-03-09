<template>
  <AppHead title="Stacks" />

  <DashboardMain>
    <template #header>Stacks</template>
    <template #buttons>
      <Button :href="$route(table.actions.create.link)">New stack</Button>
    </template>
    <template #sub-header></template>

    <Table
      :records="records"
      :filters="filters"
      :endpoint="$route('dashboard.sites.stacks.index')"
      :fields="table.fields"
      :actions="table.actions"
    />
  </DashboardMain>
</template>

<script setup>
import Table from "@/Components/Table";
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";
import Button from "@/Components/Button";

defineProps({ records: Object, filters: Object, table: Object });
</script>
