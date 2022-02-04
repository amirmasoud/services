<template>
  <Head>
    <title>Media - Users</title>
  </Head>

  <Link :href="table.actions[2].link" method="get" class="text-indigo-600 hover:text-indigo-900">Create</Link>

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

defineProps({ users: Object, filters: Object, table: Object });
</script>
