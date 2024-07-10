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

export const createValueGenerator = <T>(
  config: ValueConfig<T>,
): (() => Result<T>) => {
  valueConfigScheme.parse(config);

  return config.generateFn as () => Result<T>;
};

export const createSelectionGenerator = <T>(
  config: SelectionConfig<T>,
): (() => Result<T>) => {
  selectionConfigScheme.parse(config);

  const { items } = config;

  return (() => items[faker.number.int(items.length - 1)]) as () => Result<T>;
};

export const createObjectGenerator = <T>(
  config: ObjectConfig<T>,
): (() => Result<ObjectConfig<T>>) => {
  objConfigScheme.parse(config);

  const keyWithFns: [string, () => Result<AllConfig>][] = Object.entries(
    config.content as object,
  ).map(([key, subConfig]) => [
    key,
    createGeneratorByType(subConfig as AllConfig),
  ]);

  return () => {
    const result: Record<string, Result<AllConfig>> = {};
    for (const [key, generateFn] of keyWithFns) {
      result[key] = generateFn();
    }
    return result as Result<ObjectConfig<T>>;
  };
};

export const createArrayGenerator = <T>(
  config: ArrayConfig<T>,
): (() => Result<ArrayConfig<T>>) => {
  arrayConfigScheme.parse(config);

  const itemGeneratorFn = createGeneratorByType(config.item as AllConfig);

  return (() =>
    Array.from({ length: config.len ?? 0 }, itemGeneratorFn)) as () => Result<
    ArrayConfig<T>
  >;
};

export const createTupleGenerator = <
  A,
  B = undefined,
  C = undefined,
  D = undefined,
  E = undefined,
>(
  config: TupleConfig<A, B, C, D, E>,
): (() => Result<TupleConfig<A, B, C, D, E>>) => {
  tupleConfigScheme.parse(config);

  const itemsFns = config.configItems.map((configItem) =>
    createGeneratorByType(configItem as AllConfig),
  );

  return () =>
    itemsFns.map((generateFn) => generateFn()) as Result<
      TupleConfig<A, B, C, D, E>
    >;
};

/**
 * bounded series
 * @param {BoundedSeriesConfig} config
 * @return {() => Array<number>}
 */
export const createBoundedSeriesGenerator = (
  config: BoundedSeriesConfig,
): (() => Result<BoundedSeriesConfig>) => {
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
export const createGeneratorByType = (
  config: AllConfig,
): (() => Result<AllConfig>) => {
  switch (config.type) {
    case "obj":
      return createObjectGenerator(config);
    case "arr":
      return createArrayGenerator(config);
    case "select":
      return createSelectionGenerator(config);
    case "tuple":
      return createTupleGenerator(config);
    case "value":
      return createValueGenerator(config);
    case "bounded_series":
      return createBoundedSeriesGenerator(config);
    default: {
      //   if (customTypeMatch) {
      //     return createValueGenerator(customTypeMatch(config));
      //   }
      throw Error(`config type "${config}" is not supported`);
    }
  }
};


