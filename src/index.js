import { faker } from '@faker-js/faker';

const test = {
  type: 'obj',
  props: [
    ['subArr', { type: 'arr', item: { type: 'num', min: 100, max: 1000 }, len: 10 }],
    ['n1', { type: 'num', min: 0, max: 50 }],
    ['n2', { type: 'obj', props: [['f1', { type: 'num', max: 100 }]] }],
  ],
};

const generateRandomNumFn = (config) => {
  const { min = 0, max } = config;
  return () => faker.number.int({ min, max });
};

const generateRandomObjFn = (config) => {
  const keyWithFns = config.props.map(([key, subConfig]) => [key, generateRandomFn(subConfig)]);

  return () => {
    const result = {};
    for (const [key, generateFn] of keyWithFns) {
      result[key] = generateFn();
    }
    return result;
  };
};

const generateRandomArrayFn = (config) => {
  const itemGeneratorFn = generateRandomFn(config.item);
  return () => Array.from({ length: config.len ?? 0 }, itemGeneratorFn);
};

const generateRandomFn = (config) => {
  switch (config.type) {
    case 'obj':
      return generateRandomObjFn(config);
    case 'arr':
      return generateRandomArrayFn(config);
    case 'num':
      return generateRandomNumFn(config);
    default:
      throw Error('no match type');
  }
};

const randomFn = generateRandomFn(test);

console.log(randomFn());
