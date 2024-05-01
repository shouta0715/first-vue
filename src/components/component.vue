<script setup lang="ts">
const { title } = defineProps<{ title: string }>();
defineEmits(['enlarge']);
</script>

<template>
  <h4>
    {{ title }}
  </h4>
  <button @click="$emit('enlarge')">Click me</button>

  <p>
    <slot />
  </p>
</template>
