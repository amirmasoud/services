<template>
  <AppHead title="New site" />

  <DashboardMain>
    <template #header>
      Sites
    </template>

    <RadioGroup
      v-model="selectedStack"
      class="mb-10 max-w-screen-xl"
    >
      <RadioGroupLabel class="sr-only">
        Selected Stack Type
      </RadioGroupLabel>
      <div class="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-6 gap-4">
        <RadioGroupOption
          v-for="type in types"
          :key="type.value"
          v-slot="{ active, checked }"
          as="template"
          :value="type.value"
        >
          <div :class="[active ? 'ring-1 ring-offset-2 ring-indigo-500' : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none']">
            <div class="flex items-center flex-col">
              <img
                :src="type.icon"
                class="rounded-t-lg p-4"
              >
              <div class="block w-full px-4 pt-2 pb-4">
                <RadioGroupLabel
                  as="p"
                  class="font-medium text-gray-900"
                >
                  <span v-html="type.label" />
                </RadioGroupLabel>
                <SwitchDescription
                  as="span"
                  class="text-sm text-gray-500"
                >
                  LOL
                </SwitchDescription>
              </div>
            </div>
            <div
              :class="[checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg border-2 pointer-events-none']"
              aria-hidden="true"
            />
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>


    <RadioGroup v-model="selectedServer">
      <RadioGroupLabel class="sr-only">
        Server size
      </RadioGroupLabel>
      <div class="space-y-4">
        <RadioGroupOption
          v-for="server in servers.data"
          :key="server.id"
          v-slot="{ active, checked }"
          as="div"
          :value="server.id"
        >
          <div :class="[active ? 'ring-1 ring-offset-2 ring-indigo-500' : '', 'relative block rounded-lg border border-gray-300 bg-white shadow-sm px-6 py-4 cursor-pointer hover:border-gray-400 sm:flex sm:justify-between focus:outline-none']">
            <div class="flex items-center">
              <div class="text-sm">
                <RadioGroupLabel
                  as="p"
                  class="font-medium text-gray-900"
                >
                  {{ server.name }}
                </RadioGroupLabel>
                <RadioGroupDescription
                  as="div"
                  class="text-gray-500"
                >
                  <p class="sm:inline">
                    {{ server.ram }}{{ server.ram_unit }} / {{ server.cpu }} Core
                  </p>
                  {{ ' ' }}
                  <span
                    class="hidden sm:inline sm:mx-1"
                    aria-hidden="true"
                  >&middot;</span>
                  {{ ' ' }}
                  <p class="sm:inline">
                    {{ server.disk }}{{ server.disk_unit }} {{ server.disk_type }}
                  </p>
                </RadioGroupDescription>
              </div>
            </div>
            <RadioGroupDescription
              as="div"
              class="mt-2 flex text-sm sm:mt-0 sm:block sm:ml-4 sm:text-right"
            >
              <div class="font-medium text-gray-900">
                {{ ! server.price ? 'Free' : server.price }}
              </div>
              <div class="ml-1 text-gray-500 sm:ml-0">
                /mo
              </div>
            </RadioGroupDescription>
            <div
              :class="[checked ? 'border-indigo-500' : 'border-transparent', 'absolute -inset-px rounded-lg border-2 pointer-events-none']"
              aria-hidden="true"
            />
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>

    <br>

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
              <label
                for="servers"
                class="block text-sm font-medium text-gray-700"
              >Server</label>
              <select
                id="servers"
                v-model="form.server_id"
                name="server"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option
                  v-for="server in servers.data"
                  :key="server.id"
                  :value="server.id"
                >
                  {{ server.name }}
                </option>
              </select>
            </div>

            <div class="col-span-6 sm:col-span-4">
              <label
                for="stacks"
                class="block text-sm font-medium text-gray-700"
              >Server</label>
              <select
                id="stacks"
                v-model="form.stack_id"
                name="stack"
                class="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option
                  v-for="stack in stacks.data"
                  :key="stack.id"
                  :value="stack.id"
                >
                  {{ stack.name }}
                </option>
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
import { useForm } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Forms/Inputs/Input";
import Button from "@/Components/Forms/Buttons/Button";
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";
import { RadioGroup, RadioGroupLabel, RadioGroupOption, SwitchDescription, RadioGroupDescription } from "@headlessui/vue";
import { ref, defineProps } from "vue";

let props = defineProps({
  servers: Object,
  stacks: Object,
  types: Object,
});

const selectedStack = ref(props.types[0].value);
const selectedServer = ref(props.servers.data[0].id);

let form = useForm({
  name: null,
  host: null,
  server_id: null,
  stack_id: null,
});
</script>
