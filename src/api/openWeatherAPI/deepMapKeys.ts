const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null;

export const deepMapKeys = (
  mappedEntity: unknown,
  mapFn: (value: string) => string,
): typeof mappedEntity =>
  Array.isArray(mappedEntity)
    ? mappedEntity.map((val) => deepMapKeys(val, mapFn))
    : isObject(mappedEntity)
    ? Object.keys(mappedEntity).reduce<typeof mappedEntity>((acc, current) => {
        const key = mapFn(current);
        const value = mappedEntity[current];
        return {
          ...acc,
          [key]: isObject(value) ? deepMapKeys(value, mapFn) : value,
        };
      }, {})
    : mappedEntity;
