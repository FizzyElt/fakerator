import { expect, expectTypeOf, assert, test } from "vitest";

import {
  createValueConfig,
  createSelectionConfig,
  createArrayConfig,
  createTupleConfig,
  createObjectConfig,
} from "./create_config";
import { createGeneratorByType } from "./create_generator_fn";

test("createValueConfig", () => {
  const valueConfig = createValueConfig(() => 44);

  expect(valueConfig.type).toBe("value");
  expectTypeOf(valueConfig.generateFn).toBeFunction();
});

test("createSelectionConfig", () => {
  const options = [1, 2, 3, 4];
  const selectionConfig = createSelectionConfig([1, 2, 3, 4]);

  expect(selectionConfig.type).toBe("select");
  expectTypeOf(selectionConfig.items).toBeArra;
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
