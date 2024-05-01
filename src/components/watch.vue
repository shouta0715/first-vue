<script setup lang="ts">
import { useWatch } from '@/hooks/watch';

const { isPending, answer, question, changeVal, val } = useWatch();
</script>

<template>
  <p>
    Ask a yes/no question:
    <input
      class="border border-gray-300 p-1"
      v-model="question"
      :disabled="isPending"
    />
  </p>
  <p v-if="isPending">Loading...</p>
  <p v-else-if="answer !== null">
    {{ answer }}
  </p>

  <button @click="changeVal">
    {{ val }}
  </button>
</template>
