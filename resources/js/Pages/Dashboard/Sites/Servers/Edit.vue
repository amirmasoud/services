<template>
  <AppHead :title="`Edit ${form.name} site`" />

  <DashboardMain>
    <template #header>Edit site {{ resource.data.name }}</template>

    <form
      @submit.prevent="
        form.put($route('dashboard.sites.servers.update', [resource.data]))
      "
    >
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
                v-model="form.price"
                label="Price"
                name="price"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input v-model="form.ip" label="IP" name="ip" :form="form" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.port"
                label="Port"
                name="port"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input v-model="form.ram" label="RAM" name="ram" :form="form" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.ram_unit"
                label="RAM Unit"
                name="ram_unit"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input v-model="form.cpu" label="CPU" name="cpu" :form="form" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.disk"
                label="Disk"
                name="disk"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.disk_type"
                label="Disk Type"
                name="disk_type"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.disk_unit"
                label="Disk Unit"
                name="disk_unit"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input v-model="form.os" label="OS" name="os" :form="form" />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.os_version"
                label="OS Version"
                name="os_version"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.status"
                label="Status"
                name="status"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.notes"
                label="Notes"
                name="notes"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Button type="submit" :form="form"> Submit </Button>
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

let props = defineProps({
  resource: Object,
});

let form = useForm(`EditServer: ${props.resource.id}`, props.resource.data);
</script>
