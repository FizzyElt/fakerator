declare function createValueGenerator<T>(config: ValueConfig<T>): () => T;

declare function createSelectionGenerator<T>(
  config: SelectionConfig<T>,
): () => T;

declare function createObjectGenerator(
  config: ObjectConfig,
  customTypeMatch?: (config: object) => ValueConfig<unknown>,
): () => Record<string, unknown>;

declare function createArrayGenerator(
  config: ArrayConfig,
  customTypeMatch?: (config: object) => ValueConfig<unknown>,
): () => unknown[];

declare function createTupleGenerator(
  config: TupleConfig,
  customTypeMatch?: (config: object) => ValueConfig<unknown>,
): () => unknown[];

declare function createBoundedSeriesGenerator(
  config: BoundedSeriesConfig,
): () => number[];

declare function createGeneratorByType(
  config:
    | ValueConfig<unknown>
    | SelectionConfig<unknown>
    | ArrayConfig
    | ObjectConfig
    | TupleConfig
    | BoundedSeriesConfig,
  customTypeMatch?: (config: object) => ValueConfig<unknown>,
): () => unknown;
