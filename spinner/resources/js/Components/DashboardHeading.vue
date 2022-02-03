<template>
  <div>
    <div>
      <nav
        class="sm:hidden"
        aria-label="Back"
      >
        <a
          href="#"
          class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <ChevronLeftIcon
            class="flex-shrink-0 mr-1 -ml-1 w-5 h-5 text-gray-400"
            aria-hidden="true"
          />
          Back
        </a>
      </nav>
      <nav
        class="hidden sm:flex"
        aria-label="Breadcrumb"
      >
        <ol
          role="list"
          class="flex items-center space-x-4"
        >
          <li
            v-for="(item, index) in items"
            :key="index"
          >
            <div class="flex items-center">
              <ChevronRightIcon
                v-if="index !== 0"
                class="flex-shrink-0 w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
              <Link
                :href="item.link"
                class="text-sm font-medium text-gray-500 hover:text-gray-700"
                :class="{'ml-4': index !== 0}"
              >
                {{ item.label }}
              </Link>
            </div>
          </li>
        </ol>
      </nav>
    </div>
    <div class="md:flex md:justify-between md:items-center mt-2">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl sm:text-3xl font-bold leading-7 text-gray-900 sm:truncate">
          {{ header }}
        </h2>
      </div>
      <div class="flex flex-shrink-0 mt-4 md:mt-0 md:ml-4">
        <Link
          v-for="(button, index) in buttons"
          :key="index"
          :href="button.link"
          class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
        >
          <Button type="button">
            {{ button.label }}
          </Button>
        </Link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/solid';
import { Link } from "@inertiajs/inertia-vue3";
import Button from "@/Components/Forms/Buttons/Button";

defineProps({
  items: Array,
  header: String,
  buttons: Array,
});
</script>
