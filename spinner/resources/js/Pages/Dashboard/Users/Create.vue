<template>
  <DashboardHeading
    class="mb-6"
    :items="[
      {
        link: '/dashboard',
        label: 'Dashboard',
      },
      {
        link: '/dashboard/users',
        label: 'Users',
      },
      {
        link: '#',
        label: 'Create'
      }
    ]"
    header="Create a new user"
    :buttons="[
      {
        link: '/dashboard/users',
        label: 'List of Users',
      },
    ]"
  />

  <form @submit.prevent="form.post('/dashboard/users')">
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
</template>

<script setup>
import { useForm } from '@inertiajs/inertia-vue3';
import Input from "@/Components/Forms/Inputs/Input";
import Button from "@/Components/Forms/Buttons/Button";
import DashboardHeading from "@/Components/DashboardHeading";

let form = useForm({
  email: null,
  password: null,
  name: null,
});
</script>
