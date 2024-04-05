import { faker } from '@faker-js/faker';
import { createBoundedSeriesGenerator } from './create_generator_fn.js';

const testFn = createBoundedSeriesGenerator({
  type: 'bounded_series',
  upperLimit: 1.1,
  lowerLimit: 0.9,
  createInitValue: () => 1000,
  count: 20,
});

console.log(testFn());
