import { isNonEmptyArray, makeBy } from "effect/ReadonlyArray";
import { isFunction } from "effect/Function";
import { faker } from "@faker-js/faker";

import { isObject, isNumber } from "effect/Predicate";

// value
export const createValueGenerator = (config, level = 0) => {
  if (isFunction(config?.generateFn)) {
    return config.generateFn;
  }

  throw new Error(`level: ${level} value config is invalid\n${config}`);
};

// selection
export const createSelectionGenerator = (config, level = 0) => {
  if (isNonEmptyArray(config?.items)) {
    const { items } = config;

    return () => items[faker.number.int(items.length - 1)];
  }

  throw new Error(`level: ${level} selection config is invalid\n${config}`);
};

// object
export const createObjectGenerator = (config, level = 0) => {
  if (isObject(config.content)) {
    const keyWithFns = Object.entries(config.content).map(
      ([key, subConfig]) => [key, createGeneratorByType(subConfig, level + 1)],
    );

    return () => {
      const result = {};
      for (const [key, generateFn] of keyWithFns) {
        result[key] = generateFn();
      }
      return result;
    };
  }

  throw new Error(`level: ${level} object config is invalid\n${config}`);
};

// array
export const createArrayGenerator = (config, level = 0) => {
  if (isObject(config?.item)) {
    const itemGeneratorFn = createGeneratorByType(config.item, level + 1);

    return () => Array.from({ length: config.len ?? 0 }, itemGeneratorFn);
  }

  throw new Error(`level: ${level} array config is invalid\n${config}`);
};

// tuple
export const createTupleGenerator = (config, level = 0) => {
  if (isNonEmptyArray(config?.configItems)) {
    const itemsFns = config.configItems.map(createGeneratorByType);

    return () => itemsFns.map((generateFn) => generateFn());
  }

  throw new Error(`level: ${level} tuple config is invalid \n${config}`);
};

// bounded series
export const createBoundedSeriesGenerator = (config, level = 0) => {
  if (!isNumber(config?.upperLimit) || !isNumber(config?.lowerLimit)) {
    throw new Error(
      `level: ${level} bounded series, upperLimit and lowerLimit must be a number\n${config}`,
    );
  }

  if (config.upperLimit <= config.lowerLimit) {
    throw new Error(
      `level: ${level} bounded series, lowerLimit can not greater then upperLimit\n${config}`,
    );
  }

  if (!isFunction(config?.createInitValue)) {
    throw new Error(
      `level: ${level} bounded series, createInitValue is not a function\n${config}`,
    );
  }

  if (!isNumber(config.createInitValue())) {
    throw new Error(
      `level: ${level} bounded series, createInitValue can only return a number\n${config}`,
    );
  }

  if (!isNumber(config?.count)) {
    throw new Error(
      `level: ${level} bounded series, count is not a number\n${config}`,
    );
  }

  if (config.count < 0) {
    throw new Error(
      `level: ${level} bounded series, count can not be negative\n${config}`,
    );
  }

  const { upperLimit, lowerLimit, createInitValue, count } = config;

  return () => {
    let value = createInitValue();

    return makeBy(count, () => {
      value = faker.number.float({ max: upperLimit, min: lowerLimit }) * value;
      return value;
    });
  };
};

// all
export const createGeneratorByType = (config, level = 0) => {
  switch (config.type) {
    case "obj":
      return createObjectGenerator(config, level);
    case "arr":
      return createArrayGenerator(config, level);
    case "select":
      return createSelectionGenerator(config, level);
    case "tuple":
      return createTupleGenerator(config, level);
    case "value":
      return createValueGenerator(config, level);
    case "bounded_series":
      return createBoundedSeriesGenerator(config, level);
    default:
      throw Error(
        `level ${level} config type "${config.type}" is not supported`,
      );
  }
};
