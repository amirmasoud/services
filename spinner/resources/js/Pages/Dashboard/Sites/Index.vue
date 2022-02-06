<template>
  <AppHead title="Sites" />

  <div class="flex w-full mb-8 justify-end">
    <Link v-if="records.data.length" :href="table.actions[2].link" class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
      <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
      Create new site
    </Link>
  </div>

  <Table
    v-if="records.data.length"
    :records="records"
    :filters="filters"
    endpoint="/dashboard/sites"
    :fields="table.fields"
    :actions="table.actions"
  />
  <Empty
    v-else
    class="mt-20"
    title="No sites"
    description="Get started by creating a new site"
    button="New Site"
    :link="table.actions[2].link"
  />
</template>

<script setup>
import Table from "@/Components/Table";
import AppHead from "@/Components/AppHead";
import Empty from "@/Components/Empty";
import { PlusIcon } from '@heroicons/vue/solid';

defineProps({ records: Object, filters: Object, table: Object });
</script>
