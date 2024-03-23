import { faker } from '@faker-js/faker';

const createValueGenerator = (config) => {
  return config.generateFn;
};

const createNumGenerator = (config) => {
  const { min = 0, max } = config;
  return () => faker.number.int({ min, max });
};

const createSelectionGenerator = (config) => {
  const { items } = config;
  return () => items[faker.number.int(items.length - 1)];
};

const createObjectGenerator = (config) => {
  const keyWithFns = config.props.map(([key, subConfig]) => [key, generateRandomFn(subConfig)]);

  return () => {
    const result = {};
    for (const [key, generateFn] of keyWithFns) {
      result[key] = generateFn();
    }
    return result;
  };
};

const createArrayGenerator = (config) => {
  const itemGeneratorFn = generateRandomFn(config.item);
  return () => Array.from({ length: config.len ?? 0 }, itemGeneratorFn);
};

const createTupleGenerator = (config) => {
  const { configItems } = config;

  const itemsFns = configItems.map(generateRandomFn);

  return () => itemsFns.map((generateFn) => generateFn());
};

const createGeneratorByType = (config) => {
  switch (config.type) {
    case 'obj':
      return createObjectGenerator(config);
    case 'arr':
      return createArrayGenerator(config);
    case 'num':
      return createNumGenerator(config);
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

const test = {
  type: 'obj',
  props: [
    ['subArr', { type: 'arr', item: { type: 'num', min: 100, max: 1000 }, len: 10 }],
    ['n1', { type: 'num', min: 0, max: 50 }],
    ['n2', { type: 'obj', props: [['f1', { type: 'num', max: 100 }]] }],
  ],
};

const test2 = {
  type: 'tuple',
  configItems: [
    { type: 'value', generateFn: () => faker.number.int({ min: 0, max: 10 }) },
    { type: 'value', generateFn: () => faker.number.int({ min: 11, max: 20 }) },
    { type: 'value', generateFn: () => faker.number.int({ min: 21, max: 30 }) },
  ],
};

const randomFn = generateRandomFn(test2);

console.log(randomFn());
