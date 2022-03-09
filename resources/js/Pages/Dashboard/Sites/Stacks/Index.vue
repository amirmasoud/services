<template>
  <AppHead title="Stacks" />

  <DashboardMain>
    <template #header>Stacks</template>
    <template #buttons>
      <Link
        as="button"
        :href="table.actions.create.link"
        class="order-0 inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 sm:order-1 sm:ml-3"
      >
        <PlusIcon class="h-4 pr-4"/> Create a new stack
      </Link>
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
import { PlusIcon } from '@heroicons/vue/solid';
import DashboardMain from "@/Components/DashboardMain";

defineProps({ records: Object, filters: Object, table: Object });
</script>
