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
    :records="users"
    :filters="filters"
    endpoint="/dashboard/users"
    :fields="table.fields"
    :actions="table.actions"
  />
</template>

<script setup>
import Table from "@/Components/Table";
import DashboardHeading from "@/Components/DashboardHeading";

defineProps({ users: Object, filters: Object, dashboardHeadings: Object, table: Object });
</script>
