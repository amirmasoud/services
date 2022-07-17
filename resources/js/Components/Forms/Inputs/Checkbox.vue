<template>
  <div class="input-group">
    <input
      :id="id"
      :class="[
        hasError || form.errors[name]
          ? 'border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500'
          : 'w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
      ]"
      :name="name"
      :placeholder="placeholder"
      :value="modelValue"
      type="checkbox"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <label
      :for="id"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      {{ label }}
    </label>
    <p
      v-if="help !== ''"
      :id="`${name}-description`"
      class="mt-2 text-sm text-gray-500"
    >
      {{ help }}
    </p>
    <TransitionRoot
      :id="`${name}-error`"
      :show="hasError || !!form.errors[name]"
      as="p"
      class="mt-2 text-sm text-red-600"
      enter="transition-opacity duration-300"
      enter-from="opacity-0"
      enter-to="opacity-100"
      leave="transition-opacity duration-300"
      leave-from="opacity-100"
      leave-to="opacity-0"
    >
      {{ hasError ? errorMessage : form.errors[name] }}
    </TransitionRoot>
  </div>
</template>

<script setup>
import { TransitionRoot } from "@headlessui/vue";

defineEmits(["update:modelValue"]);

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
    default: "text",
  },
  placeholder: {
    type: String,
    default: "",
  },
  form: {
    type: Object,
    default() {
      return {errors: {}};
    },
  },
  hasError: {
    type: Boolean,
    default: true,
  },
  errorMessage: {
    type: String,
    default: "",
  },
  help: {
    type: String,
    default: "",
  },
});
</script>
