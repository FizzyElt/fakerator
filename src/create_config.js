import { faker } from "@faker-js/faker";

// value
export const createValueConfig = (generateFn) => ({
  type: "value",
  generateFn,
});

// selection
export const createSelectionConfig = (items) => ({ type: "select", items });

// object
export const createObjectConfig = (content) => ({ type: "obj", content });

// array
export const createArrayConfig = (item, len) => ({ type: "arr", item, len });

// tuple
export const createTupleConfig = (configItems) => ({
  type: "tuple",
  configItems,
});

// bounded_series
export const createBoundedSeriesConfig = (config) => {
  if (!isNumber(config?.upperLimit) || !isNumber(config?.lowerLimit)) {
    throw new Error(
      `bounded series, upperLimit and lowerLimit must be a number\n${config}`,
    );
  }

  if (config.upperLimit <= config.lowerLimit) {
    throw new Error(
      `bounded series, lowerLimit can not greater then upperLimit\n${config}`,
    );
  }

  if (!isFunction(config?.createInitValue)) {
    throw new Error(
      `bounded series, createInitValue is not a function\n${config}`,
    );
  }

  if (!isNumber(config.createInitValue())) {
    throw new Error(
      `bounded series, createInitValue can only return a number\n${config}`,
    );
  }

  if (!isNumber(config?.count)) {
    throw new Error(
      `bounded series, count is not a number\n${config}`,
    );
  }

  if (config.count < 0) {
    throw new Error(
      `level: ${level} bounded series, count can not be negative\n${config}`,
    );
  }

  return {
    type: "bounded_series",
    ...config,
  };
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
