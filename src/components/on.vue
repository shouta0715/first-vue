<script lang="ts" setup>
import { useOn } from '@/hooks/on';

const {
  onClickHandler,
  count,
  onSubmitHandler,
  onKeydownHandler,
  onKeyupHandler,
} = useOn();
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold text-center text-blue-500">On</h1>

    <button @click="onClickHandler">Click me {{ count }}</button>

    <form @submit.prevent="onSubmitHandler">
      <button type="submit">Submit</button>
    </form>

    <input
      @keydown="onKeydownHandler"
      type="text"
      placeholder="Keydown event"
    />

    <input
      type="text"
      @keydown.enter="onKeydownHandler"
      placeholder="Keydown.enter event"
    />

    <input
      type="text"
      @keydown.enter.alt="onKeydownHandler"
      placeholder="Keydown.enter.alt event"
    />

    <input @keyup="onKeyupHandler" type="text" placeholder="Keyup event" />
  </div>
</template>
