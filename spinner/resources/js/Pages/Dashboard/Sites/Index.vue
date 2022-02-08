<template>
  <AppHead title="Sites" />

  <DashboardMain>
    <template #header>Site</template>
    <template #buttons></template>
    <template #sub-header></template>
    <template #sub-header-content></template>

    <div class="px-4 mt-6 sm:px-6 lg:px-8">
      <div class="align-middle inline-block min-w-full border-b border-gray-200">
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
      </div>
    </div>
  </DashboardMain>
</template>

<script setup>
import Table from "@/Components/Table";
import AppHead from "@/Components/AppHead";
import Empty from "@/Components/Empty";
import { PlusIcon } from '@heroicons/vue/solid';
import DashboardMain from "@/Components/DashboardMain";

defineProps({ records: Object, filters: Object, table: Object });
</script>
