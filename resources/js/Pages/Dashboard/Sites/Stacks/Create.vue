<template>
  <AppHead title="Create new site" />

  <DashboardMain>
    <template #header> Sites </template>

    <form @submit.prevent="form.post($route('dashboard.sites.stacks.store'))">
      <div class="col-span-6 sm:col-span-4">
        <Input v-model="form.name" label="Name" name="name" :form="form" />
      </div>

      <div class="col-span-6 sm:col-span-4">
        <Input v-model="form.price" label="Price" name="price" :form="form" />
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
        <Input v-model="form.type" label="Type" name="type" :form="form" />
      </div>
    </form>
  </DashboardMain>
</template>

<script setup>
import { useForm } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Forms/Inputs/Input";
import AppHead from "@/Components/AppHead";
import DashboardMain from "@/Components/DashboardMain";

let form = useForm({
  name: null,
  price: null,
  properties: null,
  type: null,
});
</script>
