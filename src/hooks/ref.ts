import { ref, nextTick } from 'vue';

export const useCount = () => {
  const count = ref(0);

  const increment = async () => {
    count.value++;

    await nextTick();
  };

  return {
    count,
    increment,
  };
};
