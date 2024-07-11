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
};

export type ObjectConfig<T> = {
  type: "obj";
  content: T;
};

export type TupleConfig<
  A,
  B = undefined,
  C = undefined,
  D = undefined,
  E = undefined,
> = {
  type: "tuple";
  configItems: E extends undefined
    ? D extends undefined
      ? C extends undefined
        ? B extends undefined
          ? [A]
          : [A, B]
        : [A, B, C]
      : [A, B, C, D]
    : [A, B, C, D, E];
};

export type Result<T> = T extends ValueConfig<infer U>
  ? U
  : T extends SelectionConfig<infer S>
    ? S
    : T extends BoundedSeriesConfig
      ? number[]
      : T extends ArrayConfig<infer W>
        ? Array<Result<W>>
        : T extends ObjectConfig<infer O>
          ? { [K in keyof O]: Result<O[K]> }
          : T extends TupleConfig<infer A, infer B, infer C, infer D, infer E>
            ? E extends undefined
              ? D extends undefined
                ? C extends undefined
                  ? B extends undefined
                    ? [Result<A>]
                    : [Result<A>, Result<B>]
                  : [Result<A>, Result<B>, Result<C>]
                : [Result<A>, Result<B>, Result<C>, Result<D>]
              : [Result<A>, Result<B>, Result<C>, Result<D>, Result<E>]
            : never;
