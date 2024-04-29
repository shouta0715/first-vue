import { onMounted } from 'vue';

export const useLifeCycle = () => {
  onMounted(() => {
    console.log('mounted');
  });
};
