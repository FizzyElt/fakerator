import { faker } from "@faker-js/faker";
import {
  valueConfigScheme,
  arrayConfigScheme,
  selectionConfigScheme,
  tupleConfigScheme,
  objConfigScheme,
  boundedSeriesScheme,
} from "./config_scheme";

// value
export const createValueConfig = (generateFn) => {
  const config = {
    type: "value",
    generateFn,
  };

  valueConfigScheme.parse(config);

  return config;
};

// selection
export const createSelectionConfig = (items) => {
  const config = { type: "select", items };

  selectionConfigScheme.parse(config);

  return config;
};

// object
export const createObjectConfig = (content) => {
  const config = { type: "obj", content };

  objConfigScheme.parse(config);

  return config;
};

// array
export const createArrayConfig = (item, len) => {
  const config = { type: "arr", item, len };

  arrayConfigScheme.parse(config);

  return config;
};

// tuple
export const createTupleConfig = (configItems) => {
  const config = {
    type: "tuple",
    configItems,
  };

  tupleConfigScheme.parse(config);

  return config;
};

// bounded_series
export const createBoundedSeriesConfig = (config) => {
  const newConfig = {
    type: "bounded_series",
    ...config,
  };

  boundedSeriesScheme.parse(newConfig);

  return newConfig;
};

// int value
export const createIntValueConfig = (option) =>
  createValueConfig(() => faker.number.int(option));

// float value
export const createFloatValueConfig = (option) =>
  createValueConfig(() => faker.number.float(option));

// email value
export const createEmailValueConfig = (option) =>
  createValueConfig(() => faker.internet.email(option));
