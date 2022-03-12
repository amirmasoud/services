<template>
  <AppHead title="New site" />

  <DashboardMain>
    <template #header>Sites</template>

    <form @submit.prevent="form.post('/dashboard/sites')">
      <div class="overflow-hidden sm:rounded-md shadow">
        <div class="sm:p-6 py-5 px-4 bg-white">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.name"
                label="Name"
                name="name"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.host"
                label="Host"
                name="host"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label for="servers" class="block text-sm font-medium text-gray-700">Server</label>
              <select v-model="form.server_id" id="servers" name="server" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option v-for="server in servers.data" :key="server.id" :value="server.id">{{ server.name }}</option>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label for="stacks" class="block text-sm font-medium text-gray-700">Server</label>
              <select v-model="form.stack_id" id="stacks" name="stack" class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md">
                <option v-for="stack in stacks.data" :key="stack.id" :value="stack.id">{{ stack.name }}</option>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Button
                type="submit"
                :form="form"
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </DashboardMain>
</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import Input from "@/Components/Forms/Inputs/Input";
import Button from "@/Components/Forms/Buttons/Button";
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";

let props = defineProps({
  servers: Object,
  stacks: Object,
});

let form = useForm({
  name: null,
  host: null,
  server_id: null,
  stack_id: null,
});
</script>
