<template>
  <label
    :for="id"
    class="block text-sm font-medium text-gray-700 dark:text-slate-300"
  >{{ label }}</label>
  <div class="mt-1">
    <input
      :id="id"
      :value="modelValue"
      :type="type"
      :name="name"
      class="block w-full sm:text-sm rounded-md shadow-sm"
      :class="[hasError || !!form.errors[name] ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500' : 'focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 ']"
      :placeholder="placeholder"
      @input="$emit('update:modelValue', $event.target.value)"
    >
  </div>
  <TransitionRoot
    :id="`${name}-error`"
    :show="hasError || !!form.errors[name]"
    enter="transition-opacity duration-300"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="transition-opacity duration-300"
    leave-from="opacity-100"
    leave-to="opacity-0"
    as="p"
    class="mt-2 text-sm text-red-600"
  >
    {{ hasError ? errorMessage : form.errors[name] }}
  </TransitionRoot>
</template>

<script setup>
import { TransitionRoot } from '@headlessui/vue';
defineEmits(['update:modelValue']);

defineProps({
  name: String,
  label: String,
  modelValue: String,
  id: {
    type: String,
    default: (props) => props.name,
  },
  type: {
    type: String,
    default: 'text',
  },
  placeholder: {
    type: String,
    default: '',
  },
  form: {
    type: Object,
    default() {
      return { errors: {} };
    }
  },
  hasError: {
    type: Boolean,
    default: null,
  },
  errorMessage: {
    type: String,
    default: '',
  }
});
</script>
