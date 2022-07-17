<template>
  <AppHead title="Login"/>
  <div
    class="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen"
  >
    <div class="sm:mx-auto mt-8 sm:w-full sm:max-w-md">
      <div
        class="py-8 px-4 sm:px-10 bg-white dark:bg-slate-800 sm:rounded-lg shadow"
      >
        <form
          action="#"
          class="space-y-6"
          @submit.prevent="form.post('/login')"
        >
          <div>
            <Input
              v-model="form.email"
              :form="form"
              label="Email"
              name="email"
              type="email"
            />
          </div>

          <div>
            <Input
              v-model="form.password"
              :form="form"
              label="Password"
              name="password"
              type="password"
            />
          </div>

          <div class="flex justify-between items-center">
            <!--<div class="flex items-center">-->
            <!--  <input-->
            <!--    id="remember-me"-->
            <!--    v-model="form.remember"-->
            <!--    class="w-4 h-4 text-indigo-600 rounded border-gray-300 focus:ring-indigo-500 dark:bg-slate-800 dark-border-gray-900 dark:focus:ring-indigo-900"-->
            <!--    name="remember-me"-->
            <!--    type="checkbox"-->
            <!--  />-->
            <!--  <label-->
            <!--    class="block ml-2 text-sm text-gray-900 dark:text-slate-300"-->
            <!--    for="remember-me"-->
            <!--  >-->
            <!--    Remember me-->
            <!--  </label>-->
            <!--</div>-->
            <Checkbox
              v-model="form.remember"
              :form="form"
              label="Remember me"
              name="remember-me"
            />

            <div class="text-sm">
              <a
                class="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400"
                href="#"
              >
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <Button
              :form="form"
              class="flex justify-center py-2 px-4 w-full"
              type="submit"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import AppHead from "@/Components/AppHead.vue";
import Button from "@/Components/Forms/Buttons/Button.vue";
import Checkbox from "@/Components/Forms/Inputs/Checkbox.vue";
import Input from "@/Components/Forms/Inputs/Input.vue";
import { useForm } from "@inertiajs/inertia-vue3";

let form = useForm({
  email: null,
  password: null,
  remember: false,
});
</script>
