import { faker } from "@faker-js/faker";
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

type AllConfig =
    | ValueConfig<unknown>
    | SelectionConfig<unknown>
    | ArrayConfig<unknown>
    | ObjectConfig<unknown>
    | ObjectConfigWithFn<unknown, unknown>
    | TupleConfig<readonly unknown[]>
    | BoundedSeriesConfig;

const _createValueGenerator = <R = unknown>(
    config: ValueConfig<unknown>,
    path: string,
): (() => R) => {
    try {
        v.assert(valueConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.value\n${err}`);
    }

    return config.generateFn as () => R;
};

export const createValueGenerator = <R = unknown>(config: ValueConfig<unknown>): (() => R) =>
    _createValueGenerator(config, "*");

// =================== generator fn ====================

const _createSelectionGenerator = <T extends SelectionConfig<unknown>>(
    config: T,
    path: string,
): (() => Result<T>) => {
    try {
        v.assert(selectionConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.select\n${err}`);
    }

    const { items } = config;

    return (() => items[faker.number.int(items.length - 1)]) as () => Result<T>;
};

export const createSelectionGenerator = <T extends SelectionConfig<unknown>>(
    config: T,
): (() => Result<T>) => _createSelectionGenerator(config, "*");

// =================== generator fn ====================

const _createObjectGenerator = <
    T extends ObjectConfig<unknown> | ObjectConfigWithFn<unknown, unknown>,
>(
    config: T,
    path: string,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Result<T>) => {
    try {
        v.assert(objConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.obj\n ${err}`);
    }

    const keyWithFns: [string, () => Result<AllConfig>][] = Object.entries(
        config.content as object,
    ).map(([key, subConfig]) => [
        key,
        _createGeneratorByType(subConfig, `${path}.obj[${key}]`, customTypeMatch),
    ]);

    return () => {
        const result: Record<string, unknown> = {};
        for (const [key, generateFn] of keyWithFns) {
            result[key] = generateFn();
        }

        if ("transformer" in config && typeof config.transformer === "function") {
            return config.transformer(result) as Result<T>;
        }
        return result as Result<T>;
    };
};

export const createObjectGenerator = <T extends ObjectConfig<unknown>>(
    config: T,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Result<T>) => _createObjectGenerator(config, "*", customTypeMatch);

// =================== generator fn ====================

const _createArrayGenerator = <T extends ArrayConfig<unknown>>(
    config: T,
    path: string,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Result<T>) => {
    try {
        v.assert(arrayConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.arr\n ${err}`);
    }

    const itemGeneratorFn = _createGeneratorByType(
        config.item as AllConfig,
        `${path}.arr`,
        customTypeMatch,
    ) as () => Result<T>;

    if (config.next) {
        const next = config.next as unknown as (prev: Result<T>, current: Result<T>) => Result<T>;

        return () => {
            let prev = itemGeneratorFn();
            const result = [];
            for (let i = 0; i < config.len; i += 1) {
                const nextValue = next(prev, itemGeneratorFn());
                result.push(nextValue);
                prev = nextValue;
            }

            return result as Result<T>;
        };
    }

    return () => Array.from({ length: config.len ?? 0 }, itemGeneratorFn) as Result<T>;
};

export const createArrayGenerator = <T extends ArrayConfig<unknown>>(
    config: T,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Result<T>) => _createArrayGenerator(config, "*", customTypeMatch);

// =================== generator fn ====================

const _createTupleGenerator = <T extends TupleConfig<readonly unknown[]>>(
    config: T,
    path: string,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Result<T>) => {
    try {
        v.assert(tupleConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.tuple\n ${err}`);
    }

    const itemsFns = config.configItems.map((configItem, index) =>
        _createGeneratorByType(configItem as AllConfig, `${path}.tuple[${index}]`, customTypeMatch),
    );

    return () => itemsFns.map((generateFn) => generateFn()) as Result<T>;
};

export const createTupleGenerator = <T extends TupleConfig<readonly unknown[]>>(
    config: T,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Result<T>) => _createTupleGenerator(config, "*", customTypeMatch);

// =================== generator fn ====================

const _createBoundedSeriesGenerator = <T extends BoundedSeriesConfig>(
    config: T,
    path: string,
): (() => Result<T>) => {
    try {
        v.assert(boundedSeriesScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.boundedSeries\n ${err}`);
    }

    const { upperLimit, lowerLimit, createInitValue, count } = config;

    return () => {
        let value = createInitValue();

        const boundedSeries = [];

        for (let i = 0; i < count; i += 1) {
            value = faker.number.float({ max: upperLimit, min: lowerLimit }) * value;
            boundedSeries.push(value);
        }

        return boundedSeries as Result<T>;
    };
};

export const createBoundedSeriesGenerator = <T extends BoundedSeriesConfig>(
    config: T,
): (() => Result<T>) => _createBoundedSeriesGenerator(config, "*");

// =================== generator fn ====================

const _createGeneratorByType = <T extends AllConfig>(
    config: T,
    path: string,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Result<T>) => {
    switch (config.type) {
        case "obj":
            return _createObjectGenerator(config, path, customTypeMatch) as () => Result<T>;
        case "arr":
            return _createArrayGenerator(config, path, customTypeMatch) as () => Result<T>;
        case "tuple":
            return _createTupleGenerator(config, path, customTypeMatch) as () => Result<T>;
        case "select":
            return _createSelectionGenerator(config, path) as () => Result<T>;
        case "value":
            return _createValueGenerator(config, path);
        case "bounded_series":
            return _createBoundedSeriesGenerator(config, path) as () => Result<T>;
        default: {
            if (customTypeMatch) {
                return createValueGenerator(customTypeMatch(config, path));
            }
            throw new Error(`path: ${path}\nconfig type is not supported`);
        }
    }
};

export const createGeneratorByType = <T extends AllConfig>(
    config: T,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Result<T>) => _createGeneratorByType(config, "*", customTypeMatch);
