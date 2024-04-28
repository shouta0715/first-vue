<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
const show = ref(true);

const button = {
  class:
    'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50',
};

const onSubmit = (e: Event) => {
  e.preventDefault();

  console.log('submit');
};
</script>

<template>
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-4 justify-center items-center">
      <p class="text-center text-2xl font-bold">
        {{ msg }} count is: {{ count }}
      </p>
      <button :disabled="count > 5" v-bind="button" @click="count++">
        Click me: {{ count }}
      </button>
    </div>
    <div class="flex flex-col gap-4 justify-center items-center">
      <h3>v-if は 表示/非表示を切り替える</h3>
      <div v-if="show">This is Toggle Content</div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="show = !show"
      >
        Toggle
      </button>
    </div>
    <div class="flex flex-col gap-4 justify-center items-center">
      <h3>v-on は イベントを処理する</h3>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        @click="count = 0"
        @mouseover="count = 10"
        @mouseleave="count = 0"
      >
        Reset
      </button>
    </div>

    <div class="flex flex-col gap-4 justify-center items-center">
      <h3>formの処理</h3>

      <form @submit="onSubmit">
        <input class="border-2 border-gray-500 rounded" />
        <button v-bind="button" type="submit">Submit</button>
      </form>
    </div>
  </div>
</template>
