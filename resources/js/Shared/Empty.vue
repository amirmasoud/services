<template>
  <div class="relative h-screen bg-gray-100">
    <Alert v-if="$page.props.flash.message">{{ $page.props.flash.message }}</Alert>
    <slot/>
    <p>{{ $t("message.hello") }}</p>
  </div>
</template>

<script setup>
import Alert from "@/Components/Alert.vue";</script>
