import * as v from "valibot";

import type {
    ArrayConfig,
    BoundedSeriesConfig,
    ObjectConfig,
    ObjectConfigWithFn,
    Result,
    SelectionConfig,
    TupleConfig,
    ValueConfig,
} from "./type";

import {
    arrayConfigScheme,
    boundedSeriesScheme,
    objConfigScheme,
    selectionConfigScheme,
    tupleConfigScheme,
    valueConfigScheme,
} from "./config_scheme";

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

    v.assert(valueConfigScheme, config);

    return config;
};

/**
 * selection
 * @param {Array} items - The array of items to choose from.
 * @return {SelectionConfig} The configuration object with the type "select" and the provided items.
 */
export const createSelectionConfig = <T>(items: T[]): SelectionConfig<T> => {
    const config: SelectionConfig<T> = { type: "select", items };

    v.assert(selectionConfigScheme, config);

    return config;
};

/**
 * object
 * @param {object} content
 * @param {function} transformer
 * @return {ObjectConfig}
 */
export function createObjectConfig<T extends object>(content: T): ObjectConfig<T>;
export function createObjectConfig<T extends object, R>(
    content: T,
    transformer: (v: { [K in keyof T]: Result<T[K]> }) => R,
): ObjectConfigWithFn<T, R>;
export function createObjectConfig<T extends object, R>(
    content: T,
    transformer?: (v: { [K in keyof T]: Result<T[K]> }) => R,
): ObjectConfig<T> | ObjectConfigWithFn<T, R> {
    if (transformer) {
        const config: ObjectConfigWithFn<T, R> = {
            type: "obj",
            content,
            transformer,
        };

        v.assert(objConfigScheme, config);

        return config;
    }

    const config: ObjectConfig<T> = { type: "obj", content };

    v.assert(objConfigScheme, config);

    return config;
}

/**
 * array
 * @param {object} item
 * @param {number} len
 * @param {function} next
 * @return {ArrayConfig}
 */
export const createArrayConfig = <T>(
    item: T,
    len: number,
    next?: (prev: Result<T>, current: Result<T>) => Result<T>,
): ArrayConfig<T> => {
    const config: ArrayConfig<T> = { type: "arr", item, len, next };

    v.assert(arrayConfigScheme, config);

    return config;
};

/**
 * tuple
 * @param {Array} configItems
 * @return {TupleConfig}
 */
export const createTupleConfig = <const TItems extends readonly [unknown, ...unknown[]]>(
    configItems: TItems,
): TupleConfig<TItems> => {
    const config: TupleConfig<TItems> = {
        type: "tuple",
        configItems,
    };

    v.assert(tupleConfigScheme, config);

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

    v.assert(boundedSeriesScheme, newConfig);

    return newConfig;
};
