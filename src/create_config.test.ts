import { expect, test } from "vitest";

import {
  createArrayConfig,
  createBoundedSeriesConfig,
  createObjectConfig,
  createSelectionConfig,
  createTupleConfig,
  createValueConfig,
} from "./create_config";

test("createValueConfig", () => {
  const valueConfig = createValueConfig(() => 44);

  expect(valueConfig.type).toBe("value");
  expect(valueConfig.generateFn).toBeTypeOf("function");
});

test("createSelectionConfig", () => {
  const options = [1, 2, 3, 4];
  const selectionConfig = createSelectionConfig([1, 2, 3, 4]);

  expect(selectionConfig.type).toBe("select");
  expect(selectionConfig.items).toEqual(options);
});

test("createArrayConfig", () => {
  const valueConfig = createValueConfig(() => 44);
  const arrConfig = createArrayConfig(valueConfig, 20);

  expect(arrConfig.type).toBe("arr");
  expect(arrConfig.len).toBe(20);
  expect(arrConfig.item).toEqual(valueConfig);
});

test("createTupleConfig", () => {
  const value1Config = createValueConfig(() => 123);
  const value2Config = createValueConfig(() => "hello");

  const tupleConfig = createTupleConfig([value1Config, value2Config]);

  expect(tupleConfig.type).toBe("tuple");
  expect(tupleConfig.configItems).toEqual([value1Config, value2Config]);
});

test("createObjConfig", () => {
  const value1Config = createValueConfig(() => 32);
  const value2Config = createValueConfig(() => "frank");

  const objConfig = createObjectConfig({
    name: value2Config,
    age: value1Config,
  });

  expect(objConfig.type).toBe("obj");
  expect(objConfig.content).toEqual({ name: value2Config, age: value1Config });
});

test("createBoundedSeriesConfig", () => {
  const boundedSeriesConfig = createBoundedSeriesConfig({
    count: 1,
    upperLimit: 1.2,
    lowerLimit: 1.0,
    createInitValue: () => 40,
  });

  expect(boundedSeriesConfig.type).toBe("bounded_series");
  expect(boundedSeriesConfig.upperLimit).toBe(1.2);
  expect(boundedSeriesConfig.lowerLimit).toBe(1.0);
  expect(boundedSeriesConfig.createInitValue).toBeTypeOf("function");
});
