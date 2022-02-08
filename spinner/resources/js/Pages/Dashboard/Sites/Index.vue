<template>
  <AppHead title="Sites" />

  <DashboardMain>
    <template #header>Sites</template>
    <template #buttons>
      <Link
        as="button"
        v-if="records.data.length"
        :href="table.actions[2].link"
        class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
      >
        <PlusIcon class="h-4 pr-4"/> Create a new site
      </Link>
    </template>
    <template #sub-header></template>
    <template #sub-header-content>
      <Stats :stats="stats" />
    </template>

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
  </DashboardMain>
</template>

<script setup>
import Table from "@/Components/Table";
import AppHead from "@/Components/AppHead";
import Empty from "@/Components/Empty";
import { PlusIcon } from '@heroicons/vue/solid';
import DashboardMain from "@/Components/DashboardMain";
import Stats from "@/Components/stats";

defineProps({ records: Object, filters: Object, table: Object, stats: Object });
</script>
