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

type AllConfig =
  | ValueConfig<unknown>
  | SelectionConfig<unknown>
  | ArrayConfig<unknown>
  | ObjectConfig<unknown>
  | TupleConfig<unknown>
  | TupleConfig<unknown, unknown>
  | TupleConfig<unknown, unknown, unknown>
  | TupleConfig<unknown, unknown, unknown, unknown>
  | TupleConfig<unknown, unknown, unknown, unknown, unknown>
  | BoundedSeriesConfig;

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const createValueGenerator = <R = unknown>(config: any): (() => R) => {
  valueConfigScheme.parse(config);

  return config.generateFn as () => R;
};

export const createSelectionGenerator = <R = unknown>(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  config: any,
): (() => R) => {
  selectionConfigScheme.parse(config);

  const { items } = config;

  return (() => items[faker.number.int(items.length - 1)]) as () => R;
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const createObjectGenerator = <R = unknown>(config: any): (() => R) => {
  objConfigScheme.parse(config);

  const keyWithFns: [string, () => Result<AllConfig>][] = Object.entries(
    config.content as object,
  ).map(([key, subConfig]) => [
    key,
    createGeneratorByType(subConfig as AllConfig),
  ]);

  return () => {
    const result: Record<string, unknown> = {};
    for (const [key, generateFn] of keyWithFns) {
      result[key] = generateFn();
    }
    return result as R;
  };
};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const createArrayGenerator = <R = unknown>(config: any): (() => R) => {
  arrayConfigScheme.parse(config);

  const itemGeneratorFn = createGeneratorByType(config.item as AllConfig);

  return () => Array.from({ length: config.len ?? 0 }, itemGeneratorFn) as R;
};
// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const createTupleGenerator = <R = unknown>(config: any): (() => R) => {
  tupleConfigScheme.parse(config);

  const itemsFns = config.configItems.map((configItem: AllConfig) =>
    createGeneratorByType(configItem),
  );

  return () => itemsFns.map((generateFn: () => unknown) => generateFn());
};

export const createBoundedSeriesGenerator = <R = unknown>(
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  config: any,
): (() => R) => {
  boundedSeriesScheme.parse(config);

  const { upperLimit, lowerLimit, createInitValue, count } = config;

  return () => {
    let value = createInitValue();

    const boundedSeries = [];

    for (let i = 0; i < count; i++) {
      value = faker.number.float({ max: upperLimit, min: lowerLimit }) * value;
      boundedSeries.push(value);
    }

    return boundedSeries as R;
  };
};

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export const createGeneratorByType = <R = unknown>(config: any): (() => R) => {
  switch (config.type) {
    case "obj":
      return createObjectGenerator<R>(config);
    case "arr":
      return createArrayGenerator<R>(config);
    case "select":
      return createSelectionGenerator<R>(config);
    case "tuple":
      return createTupleGenerator<R>(config);
    case "value":
      return createValueGenerator<R>(config);
    case "bounded_series":
      return createBoundedSeriesGenerator<R>(config);
    default: {
      //   if (customTypeMatch) {
      //     return createValueGenerator(customTypeMatch(config));
      //   }
      throw Error(`config type "${config}" is not supported`);
    }
  }
};
