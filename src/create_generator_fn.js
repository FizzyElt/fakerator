// value
export const createValueConfig = (generateFn) => ({ type: 'value', generateFn });

export const createValueGenerator = (config) => {
  return config.generateFn;
};

// selection
export const createSelectionConfig = (items) => ({ type: 'select', items });

export const createSelectionGenerator = (config) => {
  const { items } = config;
  return () => items[faker.number.int(items.length - 1)];
};

// object
export const createObjectConfig = (content) => ({ type: 'obj', content });

export const createObjectGenerator = (config) => {
  const keyWithFns = Object.entries(config.content).map(([key, subConfig]) => [
    key,
    createGeneratorByType(subConfig),
  ]);

  return () => {
    const result = {};
    for (const [key, generateFn] of keyWithFns) {
      result[key] = generateFn();
    }
    return result;
  };
};

// array
export const createArrayConfig = (item, len) => ({ type: 'arr', item, len });

export const createArrayGenerator = (config) => {
  const itemGeneratorFn = createGeneratorByType(config.item);
  return () => Array.from({ length: config.len ?? 0 }, itemGeneratorFn);
};

// tuple
export const createTupleConfig = (configItems) => ({ type: 'tuple', configItems });

export const createTupleGenerator = (config) => {
  const { configItems } = config;

  const itemsFns = configItems.map(createGeneratorByType);

  return () => itemsFns.map((generateFn) => generateFn());
};

// all
export const createGeneratorByType = (config) => {
  switch (config.type) {
    case 'obj':
      return createObjectGenerator(config);
    case 'arr':
      return createArrayGenerator(config);
    case 'select':
      return createSelectionGenerator(config);
    case 'tuple':
      return createTupleGenerator(config);
    case 'value':
      return createValueGenerator(config);
    default:
      throw Error(`${config.type} is not supported type`);
  }
};
