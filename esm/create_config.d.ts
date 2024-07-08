type ValueConfig<T> = {
  type: "value";
  generateFn: () => T;
};

type SelectionConfig<T> = {
  type: "select";
  items: T[];
};

type TupleConfig = {
  type: "tuple";
  configItems: (
    | ArrayConfig
    | ObjectConfig
    | TupleConfig
    | BoundedSeriesConfig
    | ValueConfig<unknown>
    | SelectionConfig<unknown>
  )[];
};

type ObjectConfig = {
  type: "obj";
  content: Record<
    string,
    | ArrayConfig
    | ObjectConfig
    | TupleConfig
    | BoundedSeriesConfig
    | ValueConfig<unknown>
    | SelectionConfig<unknown>
  >;
};

type ArrayConfig = {
  type: "arr";
  item:
    | ArrayConfig
    | ObjectConfig
    | TupleConfig
    | BoundedSeriesConfig
    | ValueConfig<unknown>
    | SelectionConfig<unknown>;
  len: number;
};

type BoundedSeriesConfig = {
  type: "bounded_series";
  upperLimit: number;
  lowerLimit: number;
  createInitValue: () => number;
  count: number;
};

declare function createValueConfig<T>(generateFn: () => T): ValueConfig<T>;

declare function createSelectionConfig<T>(items: T[]): SelectionConfig<T>;

declare function createObjectConfig(
  content: Record<
    string,
    | ArrayConfig
    | ObjectConfig
    | TupleConfig
    | ValueConfig<unknown>
    | SelectionConfig<unknown>
  >,
): ObjectConfig;

declare function createArrayConfig(
  item:
    | ArrayConfig
    | ObjectConfig
    | TupleConfig
    | ValueConfig<unknown>
    | SelectionConfig<unknown>,
  len: number,
): ArrayConfig;

declare function createTupleConfig(
  configItems: (
    | ArrayConfig
    | ObjectConfig
    | TupleConfig
    | ValueConfig<unknown>
    | SelectionConfig<unknown>
  )[],
): TupleConfig;

declare function createBoundedSeriesConfig(config: {
  upperLimit: number;
  lowerLimit: number;
  createInitValue: () => number;
  count: number;
}): BoundedSeriesConfig;
