import { ref } from 'vue';

export const useForm = () => {
  const text = ref('');
  const selectItems = ['a', 'b', 'c'];
  const select = ref('a');

  const checked = ref(false);
  const checkedNames = ref<string[]>([]);

  const picked = ref('');

  const bindChecked = ref<'yes' | 'no'>('yes');

  const onSubmit = () => {
    console.log('text', text.value);
    console.log('select', select.value);
    console.log('checked', checked.value);
    console.log('checkNames', checkedNames.value);

    checkedNames.value.forEach((name) => {
      console.log('checkedNames', name);
    });

    console.log('picked', picked.value);

    console.log('bindChecked', bindChecked.value);
  };

  return {
    text,
    selectItems,
    select,
    checked,
    checkedNames,
    picked,
    bindChecked,
    onSubmit,
  };
};
