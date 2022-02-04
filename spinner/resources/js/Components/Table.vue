<template>
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
          <Link :href="actions[0].link.replace('{user}', record.id)" method="get" as="button" class="text-indigo-600 hover:text-indigo-900">Edit</Link>
          <Link :href="actions[1].link.replace('{user}', record.id)" method="delete" as="button" type="button" class="text-indigo-600 hover:text-indigo-900">Delete</Link>
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
</template>

<script setup>
import { ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia';
import Paginator from '@/Components/Paginator';
import Dialog from '@/Components/Dialog';
import debounce from "lodash/debounce";

let props = defineProps({
  records: Object,
  filters: {
    type: Object,
    default() {
      return { search: '' };
    }
  },
  endpoint: String,
  fields: Object,
  actions: Object,
});

let search = ref(props.filters.search);
let confirmDialog = ref(false);

watch(search, debounce(function (value) {
  Inertia.get(props.endpoint, { ...(value !== '' && { search : value }) }, { preserveState: true, replace: true });
}, 300));
</script>
