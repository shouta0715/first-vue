<script lang="ts" setup>
import { useCount } from '@/hooks/ref';
const { count, increment } = useCount();
</script>

<template>
  <h2>Ref</h2>
  <button
    class="border p-2 m-2 bg-blue-500 text-white rounded"
    @click="increment"
  >
    Increment
    {{ count }}
  </button>
</template>
