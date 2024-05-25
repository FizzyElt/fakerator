import { faker } from "@faker-js/faker";

import {
  valueConfigScheme,
  selectionConfigScheme,
  arrayConfigScheme,
  objConfigScheme,
  boundedSeriesScheme,
  tupleConfigScheme,
} from "./config_scheme.mjs";

/**
 * value
 * @param {ValueConfig} config
 * @return {function}
 */
export const createValueGenerator = (config) => {
  valueConfigScheme.parse(config);

  return config.generateFn;
};

/**
 * selection
 * @param {SelectionConfig} config
 * @return {function} The configuration object with the type "select" and the provided items.
 */
export const createSelectionGenerator = (config) => {
  selectionConfigScheme.parse(config);

  const { items } = config;

  return () => items[faker.number.int(items.length - 1)];
};

/**
 * object
 * @param {ObjectConfig} config
 * @param {(() => ValueConfig)=} customTypeMatch
 * @return {() => object}
 */
export const createObjectGenerator = (config, customTypeMatch) => {
  objConfigScheme.parse(config);

  const keyWithFns = Object.entries(config.content).map(([key, subConfig]) => [
    key,
    createGeneratorByType(subConfig, customTypeMatch),
  ]);

  return () => {
    const result = {};
    for (const [key, generateFn] of keyWithFns) {
      result[key] = generateFn();
    }
    return result;
  };
};

/**
 * array
 * @param {ArrayConfig} config
 * @param {(() => ValueConfig)=} customTypeMatch
 * @return {() => Array}
 */
export const createArrayGenerator = (config, customTypeMatch) => {
  arrayConfigScheme.parse(config);

  const itemGeneratorFn = createGeneratorByType(config.item, customTypeMatch);

  return () => Array.from({ length: config.len ?? 0 }, itemGeneratorFn);
};

/**
 * tuple
 * @param {TupleConfig} config
 * @param {(() => ValueConfig)=} customTypeMatch
 * @return {() => Array}
 */
export const createTupleGenerator = (config, customTypeMatch) => {
  tupleConfigScheme.parse(config);

  const itemsFns = config.configItems.map((configItem) =>
    createGeneratorByType(configItem, customTypeMatch),
  );

  return () => itemsFns.map((generateFn) => generateFn());
};

/**
 * bounded series
 * @param {BoundedSeriesConfig} config
 * @return {() => Array<number>}
 */
export const createBoundedSeriesGenerator = (config) => {
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

/**
 *
 * @param {ValueConfig | SelectionConfig | ArrayConfig | ObjectConfig | TupleConfig | BoundedSeriesConfig} config
 * @param {(() => ValueConfig)=} customTypeMatch
 * @return {function}
 */
export const createGeneratorByType = (config, customTypeMatch) => {
  switch (config.type) {
    case "obj":
      return createObjectGenerator(config, customTypeMatch);
    case "arr":
      return createArrayGenerator(config, customTypeMatch);
    case "select":
      return createSelectionGenerator(config);
    case "tuple":
      return createTupleGenerator(config, customTypeMatch);
    case "value":
      return createValueGenerator(config);
    case "bounded_series":
      return createBoundedSeriesGenerator(config);
    default: {
      if (customTypeMatch) {
        return createValueGenerator(customTypeMatch(config));
      }
      throw Error(`config type "${config.type}" is not supported`);
    }
  }
};
