<template>
  <AppHead title="Sites" />

  <DashboardMain>
    <template #header>Servers</template>
    <template #buttons>
      <Button>
        <Link :href="table.actions.create.link">New server</Link>
      </Button>
    </template>

    <Table
      :records="records"
      :filters="filters"
      :endpoint="$route('dashboard.sites.servers.index')"
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

defineProps({ records: Object, filters: Object, table: Object, stats: Object });
</script>
