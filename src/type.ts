export type ValueConfig<T> = {
    type: "value";
    generateFn: () => T;
};

export type SelectionConfig<T> = {
    type: "select";
    items: T[];
};

export type BoundedSeriesConfig = {
    type: "bounded_series";
    upperLimit: number;
    lowerLimit: number;
    createInitValue: () => number;
    count: number;
};

export type ArrayConfig<T> = {
    type: "arr";
    item: T;
    len: number;
    next?: (prev: Result<T>, current: Result<T>) => Result<T>;
};

export type ObjectConfig<T> = {
    type: "obj";
    content: T;
};

export type ObjectConfigWithFn<T, R> = {
    type: "obj";
    content: T;
    transformer: (v: { [K in keyof T]: Result<T[K]> }) => R;
};

export type TupleConfig<TItems extends readonly unknown[]> = {
    type: "tuple";
    configItems: TItems;
};

type ResolveTuple<TItems extends readonly unknown[]> = {
    [K in keyof TItems]: Result<TItems[K]>;
};

export type Result<T> =
    T extends ValueConfig<infer U>
        ? U
        : T extends SelectionConfig<infer S>
          ? S
          : T extends BoundedSeriesConfig
            ? number[]
            : T extends ArrayConfig<infer W>
              ? Array<Result<W>>
              : T extends ObjectConfigWithFn<infer _, infer R>
                ? R
                : T extends ObjectConfig<infer O>
                  ? { [K in keyof O]: Result<O[K]> }
                  : T extends TupleConfig<infer TItems>
                    ? ResolveTuple<TItems>
                    : never;
