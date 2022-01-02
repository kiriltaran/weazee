const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object';

export const deepMapKeys = (
  obj: Record<string, unknown>,
  fn: (value: string) => string,
) =>
  Object.keys(obj).reduce<typeof obj>((acc, current) => {
    const key = fn(current);
    const value = obj[current];
    acc[key] =
      value !== null && isObject(value) ? deepMapKeys(value, fn) : value;
    return acc;
  }, {});
