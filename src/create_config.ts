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
  SelectionConfig,
  TupleConfig,
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
export const createObjectConfig = <T extends object>(
  content: T,
): ObjectConfig<T> => {
  const config: ObjectConfig<T> = { type: "obj", content };

  objConfigScheme.parse(config);

  return config;
};

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
  <A, B, C, D, E>(configItems: [A, B, C, D, E]): TupleConfig<A, B, C, D, E>;
  <A, B, C, D>(configItems: [A, B, C, D]): TupleConfig<A, B, C, D>;
  <A, B, C>(configItems: [A, B, C]): TupleConfig<A, B, C>;
  <A, B>(configItems: [A, B]): TupleConfig<A, B>;
  <A>(configItems: [A]): TupleConfig<A>;
}
export const createTupleConfig: CreateTupleConfig = <
  A,
  B = undefined,
  C = undefined,
  D = undefined,
  E = undefined,
>(
  configItems: E extends undefined
    ? D extends undefined
      ? C extends undefined
        ? B extends undefined
          ? [A]
          : [A, B]
        : [A, B, C]
      : [A, B, C, D]
    : [A, B, C, D, E],
) => {
  const config: TupleConfig<A, B, C, D, E> = {
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
