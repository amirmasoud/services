<template>
  <AppHead title="Create new site" />

  <DashboardMain>
    <template #header>Sites</template>
    <template #buttons></template>
    <template #sub-header></template>
    <template #sub-header-content></template>

    <form @submit.prevent="form.post($route('dashboard.sites.stacks.store'))">
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
              <Input
                v-model="form.properties"
                label="Properties"
                name="properties"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.type"
                label="Type"
                name="type"
                :form="form"
              />
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

let form = useForm({
  name: null,
  price: null,
  properties: null,
  type: null,
});
</script>
