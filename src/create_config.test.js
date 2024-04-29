import { expect, expectTypeOf, assert, test } from "vitest";

import {
  createValueConfig,
  createSelectionConfig,
  createArrayConfig,
} from "./create_config";
import { createGeneratorByType } from "./create_generator_fn";

test("createValueConfig", () => {
  const valueConfig = createValueConfig(() => 44);

  expect(valueConfig.type).toBe("value");
  expectTypeOf(valueConfig.generateFn).toBeFunction();

  const value = createGeneratorByType(valueConfig)();

  expect(value).toBe(44);
});

test("createSelectionConfig", () => {
  const options = [1, 2, 3, 4];
  const selectionConfig = createSelectionConfig([1, 2, 3, 4]);

  expect(selectionConfig.type).toBe("select");
  expectTypeOf(selectionConfig.items).toBeArray();

  const value = createGeneratorByType(selectionConfig)();

  assert.include(options, value);
});

test("createArrayConfig", () => {
  const valueConfig = createValueConfig(() => 44);
  const arrConfig = createArrayConfig(valueConfig, 20);

  expect(arrConfig.type).toBe("arr");
  expect(arrConfig.len).toBe(20);
  expect(arrConfig.item).toEqual(valueConfig);

  const value = createGeneratorByType(arrConfig)();

  expectTypeOf(value).toBeArray();
  expect(value.length).toBe(20);
  expect(value).toEqual(Array.from({ length: 20 }, () => 44));
});
