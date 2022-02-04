<template>
  <Head>
    <title>Media - Users</title>
  </Head>
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

defineProps({ sites: Object, filters: Object, table: Object });
</script>
