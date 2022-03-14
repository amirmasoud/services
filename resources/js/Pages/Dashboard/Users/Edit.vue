<template>
  <AppHead :title="`Edit ${form.name} user`" />

  <DashboardMain>
    <template #header>Edit user {{ resource.data.name }}</template>
    <template #buttons></template>
    <template #sub-header></template>
    <template #sub-header-content></template>

    <form @submit.prevent="form.put(`/dashboard/users/${resource.data.id}`)">
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
                v-model="form.email"
                label="Email"
                name="email"
                type="email"
                :form="form"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Input
                v-model="form.password"
                label="Password"
                name="password"
                type="password"
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

let form = useForm(`EditUser: ${props.resource.id}`, props.resource.data);
</script>
