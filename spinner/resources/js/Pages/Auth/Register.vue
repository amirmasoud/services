<template>
  <Head title="Register" />
  <div class="flex flex-col justify-center py-12 sm:px-6 lg:px-8 min-h-screen bg-gray-50">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <img
        class="mx-auto w-auto h-12"
        src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
        alt="Workflow"
      >
      <h2 class="mt-6 text-3xl font-extrabold text-center text-gray-900">
        Register an account
      </h2>
    </div>

    <div class="sm:mx-auto mt-8 sm:w-full sm:max-w-md">
      <div class="py-8 px-4 sm:px-10 bg-white sm:rounded-lg shadow">
        <form
          class="space-y-6"
          action="#"
          @submit.prevent="form.post('/register')"
        >
          <div>
            <Input
              v-model="form.name"
              :form="form"
              label="Name"
              name="name"
            />
          </div>

          <div>
            <Input
              v-model="form.email"
              type="email"
              :form="form"
              label="Email"
              name="email"
            />
          </div>

          <div>
            <Input
              v-model="form.password"
              type="password"
              :form="form"
              label="Password"
              name="password"
            />
          </div>

          <div>
            <Input
              v-model="form.password_confirmation"
              type="password"
              :form="form"
              label="Password confirmation"
              name="password_confirmation"
            />
          </div>

          <div class="flex justify-center items-center">
            <div class="text-sm">
              <a
                href="#"
                class="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Already have an account?
              </a>
            </div>
          </div>

          <div>
            <Button
              type="submit"
              :form="form"
              class="flex justify-center py-2 px-4 w-full"
            >
              Register
            </Button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="flex absolute inset-0 items-center">
              <div class="w-full border-t border-gray-300" />
            </div>
            <div class="flex relative justify-center text-sm">
              <span class="px-2 text-gray-500 bg-white">
                Or continue with
              </span>
            </div>
          </div>

          <div class="grid grid-cols-3 gap-3 mt-6">
            <div>
              <a
                href="#"
                class="inline-flex justify-center py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white hover:bg-gray-50 rounded-md border border-gray-300 shadow-sm"
              >
                <span class="sr-only">Sign in with Facebook</span>
                <Facebook class="w-5 h-5" />
              </a>
            </div>

            <div>
              <a
                href="#"
                class="inline-flex justify-center py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white hover:bg-gray-50 rounded-md border border-gray-300 shadow-sm"
              >
                <span class="sr-only">Sign in with Twitter</span>
                <Twitter class="w-5 h-5" />
              </a>
            </div>

            <div>
              <a
                :href="github"
                class="inline-flex justify-center py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white hover:bg-gray-50 rounded-md border border-gray-300 shadow-sm"
              >
                <span class="sr-only">Sign in with GitHub</span>
                <GitHub class="w-5 h-5" />
              </a>
            </div>

            <div>
              <a
                :href="google"
                class="inline-flex justify-center py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white hover:bg-gray-50 rounded-md border border-gray-300 shadow-sm"
              >
                <span class="sr-only">Sign in with Google</span>
                <Google class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Facebook from "@/Components/Icons/Facebook";
import Twitter from "@/Components/Icons/Twitter";
import GitHub from "@/Components/Icons/GitHub";
import Google from "@/Components/Icons/Google";
import { useForm } from "@inertiajs/inertia-vue3";
import Input from "@/Components/Forms/Inputs/Input";
import Button from "@/Components/Forms/Buttons/Button";

defineProps({
  'github': String,
  'google': String,
});

let form = useForm({
  email: null,
  password: null,
  password_confirmation: null,
  name: null,
});
</script>
