<template>
  <AppHead title="Users"/>

  <DashboardMain>
    <template #header>Roles</template>
    <template #buttons>
      <Button :href="$route(table.actions.create.link)">New role</Button>
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
import AppHead from "@/Components/AppHead.vue";
import Button from "@/Components/Button.vue";
import DashboardMain from "@/Components/DashboardMain.vue";
import Table from "@/Components/Table.vue";

defineProps({records: Object, filters: Object, table: Object, stats: Object});
</script>
