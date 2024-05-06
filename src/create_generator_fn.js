import { faker } from "@faker-js/faker";

import {
  valueConfigScheme,
  selectionConfigScheme,
  arrayConfigScheme,
  objConfigScheme,
  boundedSeriesScheme,
  tupleConfigScheme,
} from "./config_scheme";

// value
export const createValueGenerator = (config, level = 0) => {
  valueConfigScheme.parse(config);

  return config.generateFn;
};

// selection
export const createSelectionGenerator = (config, level = 0) => {
  selectionConfigScheme.parse(config);

  const { items } = config;

  return () => items[faker.number.int(items.length - 1)];
};

// object
export const createObjectGenerator = (config, level = 0) => {
  objConfigScheme.parse(config);

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
};

// array
export const createArrayGenerator = (config, level = 0) => {
  arrayConfigScheme.parse(config);

  const itemGeneratorFn = createGeneratorByType(config.item, level + 1);

  return () => Array.from({ length: config.len ?? 0 }, itemGeneratorFn);
};

// tuple
export const createTupleGenerator = (config, level = 0) => {
  tupleConfigScheme.parse(config);

  const itemsFns = config.configItems.map(createGeneratorByType);

  return () => itemsFns.map((generateFn) => generateFn());
};

// bounded series
export const createBoundedSeriesGenerator = (config, level = 0) => {
  boundedSeriesScheme.parse(config);

  const { upperLimit, lowerLimit, createInitValue, count } = config;

  return () => {
    let value = createInitValue();

    const boundedSeries = [];

    for (let i = 0; i < count; i++) {
      value = faker.number.float({ max: upperLimit, min: lowerLimit }) * value;
      boundedSeries.push(value);
    }

    return boundedSeries;
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
