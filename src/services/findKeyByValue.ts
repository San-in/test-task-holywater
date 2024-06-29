export const findKeyByValue = <T extends Record<string, any>>(
  object: T,
  value: T[keyof T],
): keyof T | undefined => {
  return (Object.entries(object) as [keyof T, T[keyof T]][]).find(
    ([key, val]) => val === value,
  )?.[0];
};
