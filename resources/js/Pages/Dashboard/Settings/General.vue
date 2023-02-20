<template>
  <AppHead title="Settings"/>

  <DashboardMain>
    <template #header>Settings</template>

    <div class="px-0">
      <div class="py-6">
        <!-- Tabs -->
        <div class="lg:hidden">
          <label class="sr-only" for="selected-tab">Select a tab</label>
          <select
              id="selected-tab"
              class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm rounded-md"
              name="selected-tab"
          >
            <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
              {{ tab.name }}
            </option>
          </select>
        </div>
        <div class="hidden lg:block">
          <div class="border-b border-gray-200">
            <nav class="-mb-px flex space-x-8">
              <Link
                  v-for="tab in tabs"
                  :key="tab.name"
                  :class="[
                  tab.current
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
                ]"
                  :href="tab.href"
              >
                {{ tab.name }}
              </Link>
            </nav>
          </div>
        </div>

        <!-- Description list with inline editing -->
        <div class="mt-4">
          <div class="space-y-1 border-b border-gray-200 pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Profile</h3>
            <p class="max-w-2xl text-sm text-gray-500">
              This information will be displayed publicly so be careful what you
              share.
            </p>
          </div>
          <div class="space-y-4 mt-4">
            <Input
                v-model="form.name"
                :form="form"
                class="md:w-1/2"
                help="Your name may appear where you contribute or are mentioned. You can remove it at any time."
                label="Name"
                name="name"
                type="text"
            />
            <Input
                v-model="form.email"
                :form="form"
                class="md:w-1/2"
                label="Email"
                name="email"
                type="email"
            />
          </div>
          <Button
              class="mt-4"
              type="submit"
          >
            Update
          </Button>
        </div>
      </div>
    </div>
  </DashboardMain>
</template>

<script setup>
import AppHead from "@/Components/AppHead.vue";
import DashboardMain from "@/Components/DashboardMain.vue";
import Button from "@/Components/Forms/Buttons/ButtonForm.vue";
import Input from "@/Components/Forms/Inputs/InputForm.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import {ref} from "vue";

const tabs = [
  {
    name: "General",
    href: route("dashboard.settings.general"),
    current: true,
  },
  {
    name: "Password", href: "#", current: false
  },
  {
    name: "Notifications", href: "#", current: false
  },
  {
    name: "System Status",
    current: false,
  },
];


let form = useForm({
  name: usePage().props.value.auth.user.name,
  email: usePage().props.value.auth.user.email,
});

const automaticTimezoneEnabled = ref(true);
const autoUpdateApplicantDataEnabled = ref(false);
</script>
