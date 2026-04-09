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

const _createValueGeneratorAsync = <R = unknown>(
    config: ValueConfig<unknown>,
    path: string,
): (() => Promise<R>) => {
    try {
        v.assert(valueConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.value\n${err}`);
    }

    return (() => Promise.resolve(config.generateFn())) as () => Promise<R>;
};

export const createValueGeneratorAsync = <R = unknown>(
    config: ValueConfig<unknown>,
): (() => Promise<R>) => _createValueGeneratorAsync(config, "*");

// =================== generator fn ====================

const _createSelectionGeneratorAsync = <T extends SelectionConfig<unknown>>(
    config: T,
    path: string,
): (() => Promise<Result<T>>) => {
    try {
        v.assert(selectionConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.select\n${err}`);
    }

    const { items } = config;

    return (() => Promise.resolve(items[faker.number.int(items.length - 1)])) as () => Promise<
        Result<T>
    >;
};

export const createSelectionGeneratorAsync = <T extends SelectionConfig<unknown>>(
    config: T,
): (() => Promise<Result<T>>) => _createSelectionGeneratorAsync(config, "*");

// =================== generator fn ====================

const _createObjectGeneratorAsync = <
    T extends ObjectConfig<unknown> | ObjectConfigWithFn<unknown, unknown>,
>(
    config: T,
    path: string,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Promise<Result<T>>) => {
    try {
        v.assert(objConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.obj\n ${err}`);
    }

    const keyWithFns: [string, () => Promise<Result<AllConfig>>][] = Object.entries(
        config.content as object,
    ).map(([key, subConfig]) => [
        key,
        _createGeneratorByTypeAsync(subConfig, `${path}.obj[${key}]`, customTypeMatch),
    ]);

    return async () => {
        const result: Record<string, unknown> = {};

        const results = await Promise.all(
            keyWithFns.map(([key, generateFn]) => generateFn().then((v) => [key, v] as const)),
        );

        for (const [key, value] of results) {
            result[key] = value;
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
): (() => Promise<Result<T>>) => _createObjectGeneratorAsync(config, "*", customTypeMatch);

// =================== generator fn ====================

const _createArrayGeneratorAsync = <T extends ArrayConfig<unknown>>(
    config: T,
    path: string,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Promise<Result<T>>) => {
    try {
        v.assert(arrayConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.arr\n ${err}`);
    }

    const itemGeneratorFn = _createGeneratorByTypeAsync(
        config.item as AllConfig,
        `${path}.arr`,
        customTypeMatch,
    ) as () => Result<T>;

    if (config.next) {
        const next = config.next as unknown as (prev: Result<T>, current: Result<T>) => Result<T>;

        return async () => {
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

    return () =>
        Promise.all(Array.from({ length: config.len ?? 0 }, itemGeneratorFn)) as Promise<Result<T>>;
};

export const createArrayGeneratorAsync = <T extends ArrayConfig<unknown>>(
    config: T,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Promise<Result<T>>) => _createArrayGeneratorAsync(config, "*", customTypeMatch);

// =================== generator fn ====================

const _createTupleGeneratorAsync = <T extends TupleConfig<readonly unknown[]>>(
    config: T,
    path: string,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Promise<Result<T>>) => {
    try {
        v.assert(tupleConfigScheme, config);
    } catch (err) {
        throw new Error(`config path: ${path}.tuple\n ${err}`);
    }

    const itemsFns = config.configItems.map((configItem, index) =>
        _createGeneratorByTypeAsync(
            configItem as AllConfig,
            `${path}.tuple[${index}]`,
            customTypeMatch,
        ),
    );

    return () => Promise.all(itemsFns.map((generateFn) => generateFn())) as Promise<Result<T>>;
};

export const createTupleGeneratorAsync = <T extends TupleConfig<readonly unknown[]>>(
    config: T,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Promise<Result<T>>) => _createTupleGeneratorAsync(config, "*", customTypeMatch);

// =================== generator fn ====================

const _createBoundedSeriesGeneratorAsync = <T extends BoundedSeriesConfig>(
    config: T,
    path: string,
): (() => Promise<Result<T>>) => {
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

        return Promise.resolve(boundedSeries) as Promise<Result<T>>;
    };
};

export const createBoundedSeriesGeneratorAsync = <T extends BoundedSeriesConfig>(
    config: T,
): (() => Promise<Result<T>>) => _createBoundedSeriesGeneratorAsync(config, "*");

const _createGeneratorByTypeAsync = <T extends AllConfig>(
    config: T,
    path: string,
    customTypeMatch?: (config: unknown, path?: string) => ValueConfig<unknown>,
): (() => Promise<Result<T>>) => {
    switch (config.type) {
        case "obj":
            return _createObjectGeneratorAsync(config, path, customTypeMatch) as () => Promise<
                Result<T>
            >;
        case "arr":
            return _createArrayGeneratorAsync(config, path, customTypeMatch) as () => Promise<
                Result<T>
            >;
        case "tuple":
            return _createTupleGeneratorAsync(config, path, customTypeMatch) as () => Promise<
                Result<T>
            >;
        case "select":
            return _createSelectionGeneratorAsync(config, path) as () => Promise<Result<T>>;
        case "value":
            return _createValueGeneratorAsync(config, path);
        case "bounded_series":
            return _createBoundedSeriesGeneratorAsync(config, path) as () => Promise<Result<T>>;
        default: {
            if (customTypeMatch) {
                return createValueGeneratorAsync(customTypeMatch(config, path));
            }
            throw new Error(`path: ${path}\nconfig type is not supported`);
        }
    }
};
