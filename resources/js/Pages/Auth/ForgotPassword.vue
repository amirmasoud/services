<template>
  <section>
    <AppHead title="Login"/>
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <form class="mt-8 space-y-6" @submit.prevent="form.post($route('password.request'))">
          <Input
              v-model="form.email"
              :form="form"
              label="Email address"
              name="email"
              placeholder="Email address"
              type="email"
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

let form = useForm({
  email: null,
});
</script>
