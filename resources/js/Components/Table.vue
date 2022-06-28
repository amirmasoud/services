<template>
  <div
    v-if="records.data.length || props.filters.length"
    class="flex flex-col sm:flex-row justify-between sm:items-end space-y-4 mb-4"
  >
    <div v-for="(filter, index) in props.filters" :key="index">
      <InputFilter v-if="filter.type === 'input'" :filter="filter"/>
      <ListFilter v-else-if="filter.type === 'list'" :filter="filter"/>
    </div>
  </div>
  <div v-if="records.data.length">
    <div class="rounded-lg bg-white shadow overflow-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr>
          <th
            v-for="field in fields"
            :key="field.name"
            class="py-3 px-6 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
            scope="col"
          >
            {{ field.label }}
          </th>
          <th class="relative py-3 px-6" scope="col">
            <span class="sr-only">Actions</span>
          </th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="record in records.data" :key="record.id">
          <td
            v-for="field in fields"
            :key="field.name"
            class="py-4 px-6 text-sm font-medium text-gray-900 whitespace-nowrap"
          >
            {{ record[field.name] }}
          </td>
          <td
            class="py-4 px-6 space-x-6 text-sm font-medium text-right whitespace-nowrap"
          >
            <Link
              v-if="actions.hasOwnProperty('details')"
              :href="$route(actions.details.link, record)"
              as="button"
              class="text-indigo-600 hover:text-indigo-900"
              method="get"
            >Details
            </Link>
            <Link
              v-if="actions.hasOwnProperty('edit')"
              :href="$route(actions.edit.link, record)"
              as="button"
              class="text-indigo-600 hover:text-indigo-900"
              method="get"
            >Edit
            </Link>
            <Link
              v-if="
                  (record.hasOwnProperty('deleted_at') &&
                    !record.deleted_at &&
                    actions.hasOwnProperty('delete')) ||
                  (!record.hasOwnProperty('deleted_at') &&
                    actions.hasOwnProperty('delete'))
                "
              :disabled="
                  record.hasOwnProperty('can_delete') && !record.can_delete
                "
              :href="$route(actions.delete.link, record)"
              as="button"
              class="text-indigo-600 hover:text-indigo-900 disabled:opacity-50 disabled:cursor-not-allowed"
              method="delete"
              type="button"
            >Delete
            </Link>
            <Link
              v-if="
                  record.hasOwnProperty('deleted_at') &&
                  record.deleted_at &&
                  actions.hasOwnProperty('restore')
                "
              :href="$route(actions.restore.link, record)"
              as="button"
              class="text-indigo-600 hover:text-indigo-900"
              method="post"
              type="button"
            >Restore
            </Link>
            <Link
              v-if="
                  record.hasOwnProperty('deleted_at') &&
                  record.deleted_at &&
                  actions.hasOwnProperty('force_delete')
                "
              :href="$route(actions.force_delete.link, record)"
              as="button"
              class="text-indigo-600 hover:text-indigo-900"
              method="delete"
              type="button"
            >Force delete
            </Link>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
    <div
      class="fixed sm:relative justify-between items-center py-3 px-4 sm:px-6 bg-white border-t border-gray-200 w-[calc(100%_-_2rem)] sm:w-full mt-4 rounded-lg bg-white shadow"
    >
      <div class="flex sm:hidden flex-1 justify-between">
        <Component
          :is="records.links.prev ? 'Link' : 'button'"
          :class="{ 'cursor-not-allowed': !records.links.prev }"
          :disabled="records.links.prev === null"
          :href="records.links.prev"
          class="inline-flex relative items-center py-2 px-4 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 disabled:opacity-10"
        >
          Previous
        </Component>
        <Component
          :is="records.links.next ? 'Link' : 'button'"
          :class="{ 'cursor-not-allowed': !records.links.next }"
          :disabled="records.links.next === null"
          :href="records.links.next"
          class="inline-flex relative items-center py-2 px-4 ml-3 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 disabled:opacity-10"
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
        <Paginator :links="records.meta.links"/>
      </div>
    </div>
  </div>
  <NoResult
    v-else-if="! records.data.length && filters.length"
    :button="'button'"
    :description="'no result'"
    :title="'title'"
    class="mt-20"
    @removeFilters="filterData = {}"
  />
  <Empty
    v-else
    :button="canCreate ? button : cannotCreateButton"
    :description="canCreate ? description : cannotCreateDescription"
    :link="canCreate ? $route(actions.create.link) : null"
    :title="canCreate ? title : cannotCreateTitle"
    class="mt-20"
  />
</template>

<script setup>
import Empty from "@/Components/Empty";
import InputFilter from "@/Components/Filters/InputFilter";
import ListFilter from "@/Components/Filters/ListFilter";
import NoResult from "@/Components/NoResult";
import Paginator from "@/Components/Paginator";
import { Inertia } from "@inertiajs/inertia";
import debounce from "lodash/debounce";
import { onMounted, onUnmounted, watch } from "vue";

let props = defineProps({
  records: Object,
  filters: Object,
  endpoint: String,
  fields: Object,
  actions: Object,
  title: {
    type: String,
    default: "No records",
  },
  description: {
    type: String,
    default: "Get started by creating a new record",
  },
  button: {
    type: String,
    default: "New Record",
  },
  canCreate: {
    type: Boolean,
    default: true,
  },
  cannotCreateTitle: {
    type: String,
    default: "No records",
  },
  cannotCreateDescription: {
    type: String,
    default: "You do not have permission to create new records",
  },
  cannotCreateButton: {
    type: String,
    default: "New Record",
  },
});

let filterData = {};

onMounted(() => {
  for (let idx in props.filters) {
    filterData[props.filters[idx].name] = props.filters[idx].value;
  }
});

let interval = setInterval(() => {
  Inertia.reload({data: filterData, only: ["records"]});
}, 10000);

onUnmounted(() => {
  clearInterval(interval);
});

watch(
  props.filters,
  debounce(function (filter) {
    for (let idx in props.filters) {
      filterData[filter[idx].name] = filter[idx].value;
    }
    Inertia.get(props.endpoint, filterData, {
      preserveState: true,
      replace: true,
      only: ["records"],
    });
  }, 300)
);
</script>
