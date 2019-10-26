export const capitalize = (word: string) => {
  const firstLetter = word[0];
  const remaining = word.slice(1);
  return `${firstLetter.toUpperCase()}${remaining}`;
};
