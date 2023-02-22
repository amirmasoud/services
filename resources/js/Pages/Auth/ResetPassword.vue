<template>
  <section>
    <AppHead title="Login"/>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <form class="mt-8 space-y-6" @submit.prevent="form.post(route('password.update'))">
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

          <Input
              v-model="form.password_confirmation"
              :form="form"
              label="Password confirmation"
              name="password_confirmation"
              placeholder="Password confirmation"
              type="password"
          />

          <Input
              v-model="form.token"
              type="hidden"
          />

          <div>
            <Button
                :disabled="form.processing"
                :form="form"
                type="submit"
            >
              Reset Password
            </Button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import AppHead from "@/Components/AppHead.vue";
import Button from "@/Components/Forms/Buttons/ButtonForm.vue";
import Input from "@/Components/Forms/Inputs/InputForm.vue";
import {useForm} from "@inertiajs/vue3";
import route from "ziggy-js";

const props = defineProps({
  token: {
    type: String,
    required: true,
  },
})

let form = useForm({
  email: null,
  password: null,
  password_confirmation: null,
  token: props.token,
});
</script>
