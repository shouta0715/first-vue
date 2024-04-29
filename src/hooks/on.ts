import { ref } from 'vue';

export const useOn = () => {
  const count = ref(0);

  const onClickHandler = (e: Event) => {
    e.preventDefault();
    count.value++;
  };

  const onSubmitHandler = () => {
    console.log('submit');
  };

  const onKeydownHandler = (e: KeyboardEvent) => {
    console.log('keydown', e.key);
  };

  const onKeyupHandler = (e: KeyboardEvent) => {
    console.log('keyup', e.key);
  };

  return {
    onClickHandler,
    count,
    onSubmitHandler,
    onKeydownHandler,
    onKeyupHandler,
  };
};
