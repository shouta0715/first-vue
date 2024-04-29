<script setup lang="ts">
import basic from '@/components/basic.vue';
import ref from '@/components/ref.vue';
import computed from '@/components/computed.vue';
import ifComp from '@/components/if.vue';
import List from '@/components/for.vue';
import On from '@/components/on.vue';
import Form from '@/components/form.vue';
</script>

<template>
  <div class="p-4 grid gap-10">
    <basic msg="Vite + Vue" />
    <ref />
    <computed />
    <ifComp />
    <List />
    <On />
    <Form />
  </div>
</template>
