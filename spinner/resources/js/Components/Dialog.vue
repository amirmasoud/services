<template>
  {{ show }}
  <TransitionRoot
    as="template"
    :show="show"
  >
    <Dialog
      as="div"
      class="overflow-y-auto fixed inset-0 z-10"
      @close="show = false"
    >
      <div class="flex sm:block justify-center items-end sm:p-0 px-4 pt-4 pb-20 min-h-screen text-center">
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="ease-in duration-200"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span
          class="hidden sm:inline-block sm:h-screen sm:align-middle"
          aria-hidden="true"
        >&#8203;</span>
        <TransitionChild
          as="template"
          enter="ease-out duration-300"
          enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enter-to="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leave-from="opacity-100 translate-y-0 sm:scale-100"
          leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        >
          <div class="inline-block overflow-hidden sm:p-6 px-4 pt-5 pb-4 sm:my-8 sm:w-full sm:max-w-lg text-left align-bottom sm:align-middle bg-white rounded-lg shadow-xl transition-all transform">
            <div class="sm:flex sm:items-start">
              <div class="flex flex-shrink-0 justify-center items-center mx-auto sm:mx-0 w-12 sm:w-10 h-12 sm:h-10 bg-red-100 rounded-full">
                <ExclamationIcon
                  class="w-6 h-6 text-red-600"
                  aria-hidden="true"
                />
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-4 text-center sm:text-left">
                <DialogTitle
                  as="h3"
                  class="text-lg font-medium leading-6 text-gray-900"
                >
                  {{ dialog.title }}
                </DialogTitle>
                <div class="mt-2">
                  <p class="text-sm text-gray-500">
                    {{ dialog.body }}
                  </p>
                </div>
              </div>
            </div>
            <div class="sm:flex sm:flex-row-reverse mt-5 sm:mt-4">
              <button
                type="button"
                class="inline-flex justify-center py-2 px-4 sm:ml-3 w-full sm:w-auto text-base sm:text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-md border border-transparent focus:ring-2 focus:ring-red-500 focus:ring-offset-2 shadow-sm focus:outline-none"
                @click="show = false"
              >
                {{ dialog.buttons[0].label }}
              </button>
              <button
                ref="cancelButtonRef"
                type="button"
                class="inline-flex justify-center py-2 px-4 mt-3 sm:mt-0 w-full sm:w-auto text-base sm:text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 shadow-sm focus:outline-none"
                @click="show = false"
              >
                {{ dialog.buttons[1].label }}
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { Dialog, DialogOverlay, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue';
import { ExclamationIcon } from '@heroicons/vue/outline';
import { reactive, ref, watch } from "vue";

let props = defineProps({
  dialog: Object,
  confirmDialog: Boolean,
});

let show = ref(props.confirmDialog);

watch(show, function (value) {
  console.log(value);
});

const counter = ref(0);

console.log(counter); // { value: 0 }
console.log(counter.value); // 0

counter.value++;
console.log(counter.value); // 1
</script>
