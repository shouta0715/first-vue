import { computed, ref } from 'vue';

export function useComputed() {
  const count = ref(0);

  const double = computed(() => count.value * 2);
  const triple = computed(() => count.value * 3);
  const now = computed(() => Date.now());

  const firstName = ref('John');
  const lastName = ref('Doe');

  const fullName = computed({
    get() {
      return `${firstName.value} ${lastName.value}`;
    },
    set(value: string) {
      const [first, last] = value.split(' ');
      firstName.value = first;
      lastName.value = last;
    },
  });

  const changeName = () => {
    fullName.value = 'New Name';
  };

  const increment = () => {
    count.value++;
  };

  const decrement = () => {
    count.value--;
  };

  return {
    count,
    double,
    triple,
    now,
    fullName,
    changeName,
    increment,
    decrement,
  };
}
