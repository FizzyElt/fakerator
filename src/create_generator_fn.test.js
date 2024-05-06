import { describe, test, expect } from "vitest";
import { ZodError } from "zod";
import {
  createValueGenerator,
  createSelectionGenerator,
  createArrayGenerator,
  createTupleGenerator,
  createObjectGenerator,
  createBoundedSeriesGenerator,
} from "./create_generator_fn";

describe("createValueGenerator", () => {
  test("normal", () => {
    const value = createValueGenerator({
      type: "value",
      generateFn: () => 50,
    })();

    expect(value).toBe(50);

    const value2 = createValueGenerator({
      type: "value",
      generateFn: () => ({ age: 100, name: "hello" }),
    })();

    expect(value2).toEqual({ age: 100, name: "hello" });
  });
});

describe("createSelectionGenerator", () => {
  test("normal", () => {
    const value = createSelectionGenerator({
      type: "select",
      items: [1],
    })();

    expect(value).toBe(1);

    const value2 = createSelectionGenerator({
      type: "select",
      items: [30, 30, 30, 30],
    })();

    expect(value2).toBe(30);
  });
});

describe("createArrayGenerator", () => {
  test("normal", () => {
    const list = createArrayGenerator({
      type: "arr",
      len: 5,
      item: { type: "value", generateFn: () => ({ age: 42 }) },
    })();

    expect(list).toEqual([
      { age: 42 },
      { age: 42 },
      { age: 42 },
      { age: 42 },
      { age: 42 },
    ]);
  });
});

describe("createTupleGenerator", () => {
  test("normal", () => {
    const tuple = createTupleGenerator({
      type: "tuple",
      configItems: [
        { type: "value", generateFn: () => 225 },
        { type: "value", generateFn: () => "hello world" },
      ],
    })();

    expect(tuple.length).toBe(2);
    const [num, str] = tuple;
    expect(num).toBe(225);
    expect(str).toBe("hello world");
  });
});

describe("createObjectGenerator", () => {
  test("normal", () => {
    const obj = createObjectGenerator({
      type: "obj",
      content: {
        name: { type: "value", generateFn: () => "John" },
        age: { type: "value", generateFn: () => 50 },
        location: { type: "value", generateFn: () => "Taiwan" },
      },
    })();

    expect(obj).toEqual({ name: "John", age: 50, location: "Taiwan" });
  });
});

describe("createBoundedSeriesGenerator", () => {
  test("normal", () => {
    const upperLimit = 1.1;
    const lowerLimit = 0.9;
    const initValue = 100;
    const count = 100;

    const list = createBoundedSeriesGenerator({
      type: "bounded_series",
      upperLimit,
      lowerLimit,
      createInitValue: () => initValue,
      count,
    })();

    for (let i = 0; i < count; i++) {
      const value = list[i];
      if (i === 0) {
        const ratio = value / initValue;

        expect(ratio).toBeLessThanOrEqual(upperLimit);
        expect(ratio).toBeGreaterThanOrEqual(lowerLimit);

        continue;
      }

      const prevValue = list[i - 1];

      const ratio = value / prevValue;

      expect(ratio).toBeLessThanOrEqual(upperLimit);
      expect(ratio).toBeGreaterThanOrEqual(lowerLimit);
    }
  });
});
