<template>
  <section>
    <AppHead title="Login"/>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <form class="mt-8 space-y-6" @submit.prevent="form.post($route('login'))">
          <Input
            v-model="form.email"
            :form="form"
            label="Email address"
            name="email"
            placeholder="Email address"
            type="email"
          />

          <Input
            v-model="form.password"
            :form="form"
            label="Password"
            name="password"
            placeholder="Password"
            type="password"
          />

          <div class="flex items-center justify-between">
            <Checkbox
              id="remember"
              v-model="form.remember"
              label="Remember me"
              name="remember"
            />

            <div class="text-sm">
              <a class="font-medium text-indigo-600 hover:text-indigo-500" href="#"> Forgot your password? </a>
            </div>
          </div>

          <div>
            <Button
              :disabled="form.processing"
              :form="form"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
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
