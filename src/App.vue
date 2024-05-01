<script setup lang="ts">
import { ref as R } from 'vue';
import basic from '@/components/basic.vue';
import ref from '@/components/ref.vue';
import computed from '@/components/computed.vue';
import ifComp from '@/components/if.vue';
import List from '@/components/for.vue';
import On from '@/components/on.vue';
import Form from '@/components/form.vue';
import lifeCycle from '@/components/life-cycle.vue';
import watch from '@/components/watch.vue';
import Comp from '@/components/component.vue';

const components = {
  ref,
  computed,
  ifComp,
  List,
  On,
  Form,
  lifeCycle,
  watch,
  Comp,
};

const currentComponent = R<keyof typeof components>('ref');

const titles = R<string[]>(['t1', 't2', 't3']);
const fontSize = R(16);
</script>

<template>
  <div class="p-4 grid gap-10">
    <basic msg="Vite + Vue" />
    <ref />
    <computed />
    <if-comp />
    <List />
    <On />
    <Form />
    <lifeCycle />
    <watch />
    <Comp title="t" />

    <div :style="{ fontSize: fontSize + 'px' }">
      <Comp
        v-for="title in titles"
        :title="title"
        :key="title"
        @enlarge="fontSize += 2"
      >
        <p>{{ title + 'paragraph' }}</p>
      </Comp>
    </div>

    <div>
      <div class="flex gap-8 flex-wrap">
        <button
          v-for="(_, component) in components"
          :key="component"
          @click="currentComponent = component"
          :class="[
            'p-2 rounded',
            {
              'bg-blue-500': currentComponent === component,
              'bg-gray-300': currentComponent !== component,
              'text-white': currentComponent === component,
            },
          ]"
        >
          {{ component }}
        </button>
      </div>
      <component :is="components[currentComponent]" />
    </div>
  </div>
</template>
