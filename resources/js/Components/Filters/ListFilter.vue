<template>
  <Menu v-model="filter.value" :filter="filter"/>
</template>

<script setup>
import Menu from "@/Components/Forms/Inputs/Menu.vue";

defineProps({
  filter: Object,
});
</script>
