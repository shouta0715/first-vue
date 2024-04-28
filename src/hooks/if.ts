import { ref } from 'vue';

export const useIf = () => {
  const show = ref(true);

  const toggle = () => {
    show.value = !show.value;
  };

  return {
    show,
    toggle,
  };
};
