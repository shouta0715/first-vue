type Item = { id: number; name: string };

export const useFor = (count: number) => {
  const items: Item[] = Array.from({ length: count }, (_, i) => ({
    id: i,
    name: `Item ${i}`,
  }));

  return { items };
};
