import { ref, watch, watchEffect } from 'vue';

export const useWatch = () => {
  const question = ref('');
  const answer = ref('Questions usually contain a question mark. ;-)');

  const isPending = ref(false);

  const val = ref(0);

  watch(
    question,
    async (newQuestion) => {
      const hasQuestionMark = newQuestion.endsWith('?');

      if (!hasQuestionMark) {
        answer.value = 'Questions usually contain a question mark. ;-)';
        return;
      }

      isPending.value = true;

      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));

        answer.value = 'Thank you for asking!';
      } catch (error) {
        answer.value = 'Sorry, I cannot answer your question right now.';
      } finally {
        isPending.value = false;
      }
    },
    {}
  );

  watchEffect(() => {
    console.log('val:', val.value);
  });

  const changeVal = () => {
    val.value += 1;
  };

  return {
    question,
    answer,
    isPending,
    val,
    changeVal,
  };
};
