<script lang="ts" setup>
import { useFor } from '@/hooks/for';
import Ref from '@/components/ref.vue';

const { items } = useFor(10);
</script>

<template>
  <div>
    <ul>
      <template v-for="item in items" :key="item.id">
        <li>
          {{ item.name }}

          <Ref />
        </li>
      </template>
    </ul>
  </div>
</template>
