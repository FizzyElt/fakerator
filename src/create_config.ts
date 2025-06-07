import {
  arrayConfigScheme,
  boundedSeriesScheme,
  objConfigScheme,
  selectionConfigScheme,
  tupleConfigScheme,
  valueConfigScheme,
} from "./config_scheme";
import type {
  ArrayConfig,
  BoundedSeriesConfig,
  ObjectConfig,
  ObjectConfigWithFn,
  Result,
  SelectionConfig,
  TupleConfig,
  TupleItems,
  ValueConfig,
} from "./type";

/**
 * value
 * @param {function} generateFn - The function used to generate the value.
 * @return {ValueConfig} The configuration object with the type "value" and the provided generate function.
 */
export const createValueConfig = <T>(generateFn: () => T): ValueConfig<T> => {
  const config: ValueConfig<T> = {
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
export const createSelectionConfig = <T>(items: T[]): SelectionConfig<T> => {
  const config: SelectionConfig<T> = { type: "select", items };

  selectionConfigScheme.parse(config);

  return config;
};

/**
 * object
 * @param {object} content
 * @return {ObjectConfig}
 */
export function createObjectConfig<T extends object>(
  content: T,
): ObjectConfig<T>;
export function createObjectConfig<T extends object, R>(
  content: T,
  transformer: (v: { [K in keyof T]: Result<T[K]> }) => R,
): ObjectConfigWithFn<T, R>;
export function createObjectConfig<T extends object, R>(
  content: T,
  transformer?: (v: { [K in keyof T]: Result<T[K]> }) => R,
) {
  if (transformer) {
    const config: ObjectConfigWithFn<T, R> = {
      type: "obj",
      content,
      transformer,
    };
    objConfigScheme.parse(config);
    return config;
  }

  const config: ObjectConfig<T> = { type: "obj", content };

  objConfigScheme.parse(config);

  return config;
}

/**
 * array
 * @param {object} item
 * @param {number} len
 * @return {ArrayConfig}
 */
export const createArrayConfig = <T>(item: T, len: number): ArrayConfig<T> => {
  const config: ArrayConfig<T> = { type: "arr", item, len };

  arrayConfigScheme.parse(config);

  return config;
};

/**
 * tuple
 * @param {Array} configItems
 * @return {TupleConfig}
 */
interface CreateTupleConfig {
  <A, B, C, D, E, F, G, H, I, J>(
    configItems: [A, B, C, D, E, F, G, H, I, J],
  ): TupleConfig<A, B, C, D, E, F, G, H, I, J>;
  <A, B, C, D, E, F, G, H, I>(
    configItems: [A, B, C, D, E, F, G, H, I],
  ): TupleConfig<A, B, C, D, E, F, G, H, I>;
  <A, B, C, D, E, F, G, H>(
    configItems: [A, B, C, D, E, F, G, H],
  ): TupleConfig<A, B, C, D, E, F, G, H>;
  <A, B, C, D, E, F, G>(
    configItems: [A, B, C, D, E, F, G],
  ): TupleConfig<A, B, C, D, E, F, G>;
  <A, B, C, D, E, F>(
    configItems: [A, B, C, D, E, F],
  ): TupleConfig<A, B, C, D, E, F>;
  <A, B, C, D, E>(configItems: [A, B, C, D, E]): TupleConfig<A, B, C, D, E>;
  <A, B, C, D>(configItems: [A, B, C, D]): TupleConfig<A, B, C, D>;
  <A, B, C>(configItems: [A, B, C]): TupleConfig<A, B, C>;
  <A, B>(configItems: [A, B]): TupleConfig<A, B>;
  <A>(configItems: [A]): TupleConfig<A>;
}
export const createTupleConfig: CreateTupleConfig = <
  A,
  B,
  C,
  D,
  E,
  F,
  G,
  H,
  I,
  J,
>(
  configItems: TupleItems<A, B, C, D, E, F, G, H, I, J>,
) => {
  const config: TupleConfig<A, B, C, D, E, F, G, H, I, J> = {
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
export const createBoundedSeriesConfig = (
  config: Omit<BoundedSeriesConfig, "type">,
): BoundedSeriesConfig => {
  const newConfig: BoundedSeriesConfig = {
    type: "bounded_series",
    ...config,
  };

  boundedSeriesScheme.parse(newConfig);

  return newConfig;
};
