<template>
  <AppHead title="Create new user"/>

  <DashboardMain>
    <template #header>Create a new role</template>
    <template #buttons></template>
    <template #sub-header></template>
    <template #sub-header-content></template>

    <form @submit.prevent="form.post(route('dashboard.users.roles.store'))">
      <div class="overflow-hidden sm:rounded-md shadow">
        <div class="sm:p-6 py-5 px-4 bg-white">
          <div class="grid grid-cols-6 gap-6">
            <div class="col-span-6 sm:col-span-4">
              <Input
                  v-model="form.name"
                  :form="form"
                  label="Name"
                  name="name"
              />
            </div>

            <div class="col-span-6 sm:col-span-4">
              <Button :form="form" type="submit">Submit</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  </DashboardMain>
</template>

<script setup>
import AppHead from "@/Components/AppHead.vue";
import DashboardMain from "@/Components/DashboardMain.vue";
import Button from "@/Components/Forms/Buttons/ButtonForm.vue";
import Input from "@/Components/Forms/Inputs/InputForm.vue";
import {useForm} from "@inertiajs/vue3";
import route from "ziggy-js";

let form = useForm({
  name: null,
});
</script>
