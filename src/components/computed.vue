<script lang="ts" setup>
import { useComputed } from '@/hooks/computed';
const {
  count,
  increment,
  decrement,
  double,
  triple,
  now,
  fullName,
  changeName,
} = useComputed();
</script>

<template>
  <h2 class="text-2xl font-bold text-center text-blue-500">Computed</h2>
  <p>Full Name: {{ fullName }}</p>
  <button
    class="border p-2 m-2 bg-blue-500 text-white rounded"
    @click="changeName"
  >
    change name
  </button>
  <div class="flex gap-4">
    <p>Count: {{ count }}</p>
    <p>Double: {{ double }}</p>
    <p>Triple: {{ triple }}</p>
  </div>
  <button
    class="border p-2 m-2 bg-blue-500 text-white rounded"
    @click="increment"
  >
    Increment
  </button>
  <button
    class="border p-2 m-2 bg-blue-500 text-white rounded"
    @click="decrement"
  >
    Decrement
  </button>

  <div class="flex gap-4">
    <time>{{ now }}</time>
  </div>
</template>
