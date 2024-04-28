<script lang="ts" setup>
import { useIf } from '@/hooks/if';
const { show, toggle } = useIf();
</script>

<template>
  <div>
    <h1 v-if="show">Hello, Vite + Vue</h1>
    <h1 v-else>Hidden</h1>

    <p v-show="show">v-show</p>
    <button
      @click="toggle"
      class="border p-2 m-2 bg-blue-500 text-white rounded"
    >
      Toggle
    </button>
  </div>
</template>
