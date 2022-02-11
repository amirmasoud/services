<template>
  <div class="flex justify-between mb-4">
    <div v-for="filter in props.filters">
      <InputFilter v-if="filter.type === 'input'" :filter="filter" />
      <ListFilter v-else-if="filter.type === 'list'" :filter="filter" />
    </div>
  </div>
  <div v-if="records.data.length" class="rounded-lg bg-white overflow-hidden shadow">
    <table class="min-w-full divide-y divide-gray-200">
      <thead class="bg-gray-50">
      <tr>
        <th
          v-for="field in fields"
          :key="field.name"
          scope="col"
          class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
        >
          {{ field.label }}
        </th>
        <th
          scope="col"
          class="relative py-3 px-6"
        >
          <span class="sr-only">Actions</span>
        </th>
      </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200">
      <tr
        v-for="record in records.data"
        :key="record.id"
      >
        <td
          v-for="field in fields"
          :key="field.name"
          class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
        >
          {{ record[field.name] }}
        </td>
        <td class="py-4 px-6 space-x-6 text-sm font-medium text-right whitespace-nowrap">
          <Link :href="replaceRoute(actions[0].link, record)" method="get" as="button" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
          <Link :href="replaceRoute(actions[1].link, record)" method="delete" as="button" type="button" class="text-indigo-600 hover:text-indigo-900">Delete</Link>
        </td>
      </tr>
      </tbody>
    </table>
    <div class="flex justify-between items-center py-3 px-4 sm:px-6 bg-white border-t border-gray-200">
      <div class="flex sm:hidden flex-1 justify-between">
        <Component
          :is="records.links.prev ? 'Link' : 'span'"
          :href="records.links.prev"
          class="inline-flex relative items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 cursor-pointer"
        >
          Previous
        </Component>
        <Component
          :is="records.links.next ? 'Link' : 'span'"
          :href="records.links.next"
          class="inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 cursor-pointer"
        >
          Next
        </Component>
      </div>
      <div class="hidden sm:flex sm:flex-1 sm:justify-between sm:items-center">
        <div>
          <p class="text-sm text-gray-700">
            Showing
            <span class="font-medium">{{ records.meta.from }}</span>
            to
            <span class="font-medium">{{ records.meta.to }}</span>
            of
            <span class="font-medium">{{ records.meta.total }}</span>
            results
          </p>
        </div>
        <Paginator :links="records.meta.links" />
      </div>
    </div>
  </div>
<!--  <NoResult-->
<!--    v-else-if="! records.data.length && ! _.isEmpty(filterData)"-->
<!--    class="mt-20"-->
<!--    title="Nothing found"-->
<!--    description="Remove filters to see all records"-->
<!--    button="Remove filters"-->
<!--    @remove-filters="removeFilters"-->
<!--  />-->
  <Empty
    v-else
    class="mt-20"
    title="No records"
    description="Get started by creating a new record"
    button="New Record"
    :link="actions[2].link"
  />
</template>

<script setup>
import { onMounted, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import Paginator from '@/Components/Paginator';
import debounce from "lodash/debounce";
import Empty from "@/Components/Empty";
import { replaceRoute } from '@/Services/route';
import InputFilter from "@/Components/Filters/InputFilter";
import ListFilter from "@/Components/Filters/ListFilter";

let props = defineProps({
  records: Object,
  filters: Object,
  endpoint: String,
  fields: Object,
  actions: Object,
});

let filterData = {};

onMounted(() => {
  for (let idx in props.filters) {
    filterData[props.filters[idx].name] = props.filters[idx].value;
  }
});

watch(props.filters, debounce(function (filter) {
  for (let idx in props.filters) {
    filterData[filter[idx].name] = filter[idx].value;
  }
  Inertia.get(props.endpoint, filterData, { preserveState: true, replace: true, only: ['records'] });
}, 300));
</script>
