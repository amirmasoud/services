<template>
  <Head>
    <title>Media - Users</title>
  </Head>
  <DashboardHeading
    class="mb-6"
    :items="dashboardHeadings.items"
    header="Users"
    :buttons="dashboardHeadings.buttons"
  />
  <Table
    :records="sites"
    :filters="filters"
    endpoint="/dashboard/sites"
    :fields="table.fields"
    :actions="table.actions"
  />
</template>

<script setup>
import Table from "@/Components/Table";
import DashboardHeading from "@/Components/DashboardHeading";

defineProps({ sites: Object, filters: Object, dashboardHeadings: Object, table: Object });
</script>
