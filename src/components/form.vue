<script setup lang="ts">
import { useForm } from '@/hooks/form';

const {
  text,
  selectItems,
  select,
  onSubmit,
  checked,
  checkedNames,
  picked,
  bindChecked,
} = useForm();
</script>

<template>
  <form @submit.prevent="onSubmit">
    <input class="border border-gray-300 rounded-md" v-model="text" />

    <select class="border border-gray-700 rounded-md" v-model="select">
      <option v-for="item in selectItems" :key="item" :value="item">
        {{ item }}
      </option>
    </select>

    <label class="flex items-center space-x-2">
      <input
        type="checkbox"
        class="border border-gray-700 rounded-md"
        v-model="checked"
      />
      <span>Check me</span>
    </label>

    <div>Checked names: {{ checkedNames }}</div>

    <input type="checkbox" id="jack" value="Jack" v-model="checkedNames" />
    <label for="jack">Jack</label>

    <input type="checkbox" id="john" value="John" v-model="checkedNames" />
    <label for="john">John</label>

    <input type="checkbox" id="mike" value="Mike" v-model="checkedNames" />
    <label for="mike">Mike</label>

    <div>Picked: {{ picked }}</div>

    <input type="radio" id="one" value="One" v-model="picked" />
    <label for="one">One</label>

    <input type="radio" id="two" value="Two" v-model="picked" />
    <label for="two">Two</label>

    <input
      type="checkbox"
      v-model="bindChecked"
      true-value="yes"
      false-value="no"
    />
  </form>
</template>
