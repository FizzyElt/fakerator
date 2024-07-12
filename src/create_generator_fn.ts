import { faker } from "@faker-js/faker";

import {
  valueConfigScheme,
  selectionConfigScheme,
  arrayConfigScheme,
  objConfigScheme,
  boundedSeriesScheme,
  tupleConfigScheme,
} from "./config_scheme";
import type {
  ValueConfig,
  SelectionConfig,
  ObjectConfig,
  TupleConfig,
  ArrayConfig,
  Result,
  BoundedSeriesConfig,
} from "./type";
import { createObjectConfig, createValueConfig } from "./create_config";

type AllConfig<T> =
  | ValueConfig<T>
  | SelectionConfig<T>
  | ArrayConfig<T>
  | ObjectConfig<T>
  | TupleConfig<T>
  | TupleConfig<T, T>
  | TupleConfig<T, T, T>
  | TupleConfig<T, T, T, T>
  | TupleConfig<T, T, T, T, T>
  | BoundedSeriesConfig;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const createValueGenerator = <R = unknown>(config: any): (() => R) => {
  valueConfigScheme.parse(config);

  return config.generateFn as () => R;
};

export const createSelectionGenerator = <T extends SelectionConfig<unknown>>(
  config: T,
): (() => Result<T>) => {
  selectionConfigScheme.parse(config);

  const { items } = config;

  return (() => items[faker.number.int(items.length - 1)]) as () => Result<T>;
};

export const createObjectGenerator = <T extends ObjectConfig<unknown>>(
  config: T,
  customTypeMatch?: (config: unknown) => ValueConfig<unknown>,
): (() => Result<T>) => {
  objConfigScheme.parse(config);

  const keyWithFns: [string, () => Result<AllConfig<unknown>>][] =
    Object.entries(config.content as object).map(([key, subConfig]) => [
      key,
      createGeneratorByType(subConfig, customTypeMatch),
    ]);

  return () => {
    const result: Record<string, unknown> = {};
    for (const [key, generateFn] of keyWithFns) {
      result[key] = generateFn();
    }
    return result as Result<T>;
  };
};

export const createArrayGenerator = <T extends ArrayConfig<unknown>>(
  config: T,
  customTypeMatch?: (config: unknown) => ValueConfig<unknown>,
): (() => Result<T>) => {
  arrayConfigScheme.parse(config);

  const itemGeneratorFn = createGeneratorByType(
    config.item as AllConfig<unknown>,
    customTypeMatch,
  );

  return () =>
    Array.from({ length: config.len ?? 0 }, itemGeneratorFn) as Result<T>;
};

export const createTupleGenerator = <
  T extends
    | TupleConfig<unknown, unknown, unknown, unknown, unknown>
    | TupleConfig<unknown, unknown, unknown, unknown>
    | TupleConfig<unknown, unknown, unknown>
    | TupleConfig<unknown, unknown>
    | TupleConfig<unknown>,
>(
  config: T,
  customTypeMatch?: (config: unknown) => ValueConfig<unknown>,
): (() => Result<T>) => {
  tupleConfigScheme.parse(config);

  const itemsFns = config.configItems.map((configItem) =>
    createGeneratorByType(configItem as AllConfig<unknown>, customTypeMatch),
  );

  return () => itemsFns.map((generateFn) => generateFn()) as Result<T>;
};

export const createBoundedSeriesGenerator = <T extends BoundedSeriesConfig>(
  config: T,
): (() => Result<T>) => {
  boundedSeriesScheme.parse(config);

  const { upperLimit, lowerLimit, createInitValue, count } = config;

  return () => {
    let value = createInitValue();

    const boundedSeries = [];

    for (let i = 0; i < count; i++) {
      value = faker.number.float({ max: upperLimit, min: lowerLimit }) * value;
      boundedSeries.push(value);
    }

    return boundedSeries as Result<T>;
  };
};

export const createGeneratorByType = <T extends AllConfig<unknown>>(
  config: T,
  customTypeMatch?: (config: unknown) => ValueConfig<unknown>,
): (() => Result<T>) => {
  switch (config.type) {
    case "obj":
      return createObjectGenerator(config, customTypeMatch) as () => Result<T>;
    case "arr":
      return createArrayGenerator(config, customTypeMatch) as () => Result<T>;
    case "tuple":
      return createTupleGenerator(config, customTypeMatch) as () => Result<T>;
    case "select":
      return createSelectionGenerator(config) as () => Result<T>;
    case "value":
      return createValueGenerator(config);
    case "bounded_series":
      return createBoundedSeriesGenerator(config) as () => Result<T>;
    default: {
      if (customTypeMatch) {
        return createValueGenerator(customTypeMatch(config));
      }
      throw Error(`config type "${config}" is not supported`);
    }
  }
};
