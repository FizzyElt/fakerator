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

export type TupleItems<A, B, C, D, E, F, G, H, I, J> = J extends undefined
    ? I extends undefined
        ? H extends undefined
            ? G extends undefined
                ? F extends undefined
                    ? E extends undefined
                        ? D extends undefined
                            ? C extends undefined
                                ? B extends undefined
                                    ? [A]
                                    : [A, B]
                                : [A, B, C]
                            : [A, B, C, D]
                        : [A, B, C, D, E]
                    : [A, B, C, D, E, F]
                : [A, B, C, D, E, F, G]
            : [A, B, C, D, E, F, G, H]
        : [A, B, C, D, E, F, G, H, I]
    : [A, B, C, D, E, F, G, H, I, J];

export type TupleConfig<
    A,
    B = undefined,
    C = undefined,
    D = undefined,
    E = undefined,
    F = undefined,
    G = undefined,
    H = undefined,
    I = undefined,
    J = undefined,
> = {
    type: "tuple";
    configItems: TupleItems<A, B, C, D, E, F, G, H, I, J>;
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
                  : T extends TupleConfig<
                          infer A,
                          infer B,
                          infer C,
                          infer D,
                          infer E,
                          infer F,
                          infer G,
                          infer H,
                          infer I,
                          infer J
                      >
                    ? J extends undefined
                        ? I extends undefined
                            ? H extends undefined
                                ? G extends undefined
                                    ? F extends undefined
                                        ? E extends undefined
                                            ? D extends undefined
                                                ? C extends undefined
                                                    ? B extends undefined
                                                        ? [Result<A>]
                                                        : [Result<A>, Result<B>]
                                                    : [
                                                          Result<A>,
                                                          Result<B>,
                                                          Result<C>,
                                                      ]
                                                : [
                                                      Result<A>,
                                                      Result<B>,
                                                      Result<C>,
                                                      Result<D>,
                                                  ]
                                            : [
                                                  Result<A>,
                                                  Result<B>,
                                                  Result<C>,
                                                  Result<D>,
                                                  Result<E>,
                                              ]
                                        : [
                                              Result<A>,
                                              Result<B>,
                                              Result<C>,
                                              Result<D>,
                                              Result<E>,
                                              Result<F>,
                                          ]
                                    : [
                                          Result<A>,
                                          Result<B>,
                                          Result<C>,
                                          Result<D>,
                                          Result<E>,
                                          Result<F>,
                                          Result<G>,
                                      ]
                                : [
                                      Result<A>,
                                      Result<B>,
                                      Result<C>,
                                      Result<D>,
                                      Result<E>,
                                      Result<F>,
                                      Result<G>,
                                      Result<H>,
                                  ]
                            : [
                                  Result<A>,
                                  Result<B>,
                                  Result<C>,
                                  Result<D>,
                                  Result<E>,
                                  Result<F>,
                                  Result<G>,
                                  Result<H>,
                                  Result<I>,
                              ]
                        : [
                              Result<A>,
                              Result<B>,
                              Result<C>,
                              Result<D>,
                              Result<E>,
                              Result<F>,
                              Result<G>,
                              Result<H>,
                              Result<I>,
                              Result<J>,
                          ]
                    : never;
