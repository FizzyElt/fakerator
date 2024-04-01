import { isNonEmptyArray } from 'effect/ReadonlyArray';
import { isFunction } from 'effect/Function';
import { isObject, isNumber } from 'effect/Predicate';

// value
export const createValueGenerator = (config, level = 0) => {
  if (isFunction(config?.generateFn)) {
    return config.generateFn;
  }

  throw new Error(`level ${level} value config is invalid \n${config}`);
};

// selection
export const createSelectionGenerator = (config, level = 0) => {
  if (isNonEmptyArray(config?.items)) {
    const { items } = config;

    return () => items[faker.number.int(items.length - 1)];
  }

  throw new Error(`level ${level} selection config is invalid \n${config}`);
};

// object
export const createObjectGenerator = (config, level = 0) => {
  if (isObject(config.content)) {
    const keyWithFns = Object.entries(config.content).map(([key, subConfig]) => [
      key,
      createGeneratorByType(subConfig, level + 1),
    ]);

    return () => {
      const result = {};
      for (const [key, generateFn] of keyWithFns) {
        result[key] = generateFn();
      }
      return result;
    };
  }

  throw new Error(`level ${level} object config is invalid \n${config}`);
};

// array
export const createArrayGenerator = (config, level = 0) => {
  if (isObject(config?.item)) {
    const itemGeneratorFn = createGeneratorByType(config.item, level + 1);

    return () => Array.from({ length: config.len ?? 0 }, itemGeneratorFn);
  }

  throw new Error(`level ${level} array config is invalid \n${config}`);
};

// tuple
export const createTupleGenerator = (config) => {
  if (isNonEmptyArray(config?.configItems)) {
    const itemsFns = config.configItems.map(createGeneratorByType);

    return () => itemsFns.map((generateFn) => generateFn());
  }

  throw new Error(`level ${level} tuple config is invalid \n${config}`);
};

// TODO
export const createBoundedSeriesGenerator = (config, level = 0) => {
  if (!isNumber(config.upperLimit) || !isNumber(config.lowerLimit)) {
    throw new Error('upperLimit and lowerLimit must be a number');
  }

  if (config.upperLimit <= config.lowerLimit) {
    throw new Error('lowerLimit can not greater then upperLimit');
  }

  if (!isFunction(config.createBaseValue)) {
    throw new Error('createBaseValue is not a function');
  }
};

// all
export const createGeneratorByType = (config, level = 0) => {
  switch (config.type) {
    case 'obj':
      return createObjectGenerator(config, level);
    case 'arr':
      return createArrayGenerator(config, level);
    case 'select':
      return createSelectionGenerator(config, level);
    case 'tuple':
      return createTupleGenerator(config, level);
    case 'value':
      return createValueGenerator(config, level);
    default:
      throw Error(`level ${level} config type "${config.type}" is not supported`);
  }
};
