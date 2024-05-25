import { faker } from "@faker-js/faker";
import {
  valueConfigScheme,
  arrayConfigScheme,
  selectionConfigScheme,
  tupleConfigScheme,
  objConfigScheme,
  boundedSeriesScheme,
} from "./config_scheme.mjs";

/**
 * value
 * @param {function} generateFn - The function used to generate the value.
 * @return {ValueConfig} The configuration object with the type "value" and the provided generate function.
 */
export const createValueConfig = (generateFn) => {
  const config = {
    type: "value",
    generateFn,
  };

  valueConfigScheme.parse(config);

  return config;
};

/**
 * selection
 * @param {Array} items - The array of items to choose from.
 * @return {SelectionConfig} The configuration object with the type "select" and the provided items.
 */
export const createSelectionConfig = (items) => {
  const config = { type: "select", items };

  selectionConfigScheme.parse(config);

  return config;
};

/**
 * object
 * @param {object} content
 * @return {ObjectConfig}
 */
export const createObjectConfig = (content) => {
  const config = { type: "obj", content };

  objConfigScheme.parse(config);

  return config;
};

/**
 * array
 * @param {object} item
 * @param {number} len
 * @return {ArrayConfig}
 */
export const createArrayConfig = (item, len) => {
  const config = { type: "arr", item, len };

  arrayConfigScheme.parse(config);

  return config;
};

/**
 * tuple
 * @param {Array} configItems
 * @return {TupleConfig}
 */
export const createTupleConfig = (configItems) => {
  const config = {
    type: "tuple",
    configItems,
  };

  tupleConfigScheme.parse(config);

  return config;
};

/**
 * bounded series
 * @param {{ upperLimit: number, lowerLimit: number, createInitValue: () => number, count: number }} config
 * @return {BoundedSeriesConfig}
 */
export const createBoundedSeriesConfig = (config) => {
  const newConfig = {
    type: "bounded_series",
    ...config,
  };

  boundedSeriesScheme.parse(newConfig);

  return newConfig;
};
