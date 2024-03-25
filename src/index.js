import { faker } from '@faker-js/faker';
import {
  createGeneratorByType,
  createObjectConfig,
  createArrayConfig,
  createValueConfig,
} from './create_generator_fn.js';

const test = createObjectConfig({
  name: createValueConfig(() => faker.person.fullName()),
  list: createArrayConfig(
    createValueConfig(() => faker.number.int({ min: 50, max: 100 })),
    10
  ),
});

const test2 = {
  type: 'tuple',
  configItems: [
    { type: 'value', generateFn: () => faker.number.int({ min: 0, max: 10 }) },
    { type: 'value', generateFn: () => faker.number.int({ min: 11, max: 20 }) },
    { type: 'value', generateFn: () => faker.number.int({ min: 21, max: 30 }) },
  ],
};

const randomFn = createGeneratorByType(test);

console.log(randomFn());
