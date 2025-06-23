import { describe, expect, test } from "vitest";
import {
  createArrayConfig,
  createObjectConfig,
  createTupleConfig,
  createValueConfig,
} from "./create_config";
import {
  createArrayGenerator,
  createBoundedSeriesGenerator,
  createGeneratorByType,
  createObjectGenerator,
  createSelectionGenerator,
  createTupleGenerator,
  createValueGenerator,
} from "./create_generator_fn";
import type { ObjectConfig } from "./type";

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
  test("with next function", () => {
    const list = createArrayGenerator(
      createArrayConfig(
        createValueConfig(() => 100),
        5,
        (prev) => prev + 1,
      ),
    )();

    expect(list).toEqual([101, 102, 103, 104, 105]);
  });
});

describe("createTupleGenerator", () => {
  test("normal", () => {
    const tuple = createTupleGenerator(
      createTupleConfig([
        createValueConfig(() => 225),
        createValueConfig(() => "hello world"),
      ]),
    )();

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

  test("transformer function", () => {
    const obj = createObjectGenerator(
      createObjectConfig(
        {
          name: createValueConfig(() => "John"),
          age: createValueConfig(() => 50),
          location: createValueConfig(() => "Taiwan"),
        },
        ({ age }) => age + 50,
      ),
    )();

    expect(obj).toEqual(100);
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

describe("createGeneratorByType", () => {
  test("normal", () => {
    const config = createObjectConfig({
      name: createValueConfig(() => "John"),
      age: createValueConfig(() => 50),
      locations: createArrayConfig(
        createValueConfig(() => "Taiwan"),
        5,
      ),
    });
    const result = createGeneratorByType(config)();

    expect(result).toEqual({
      name: "John",
      age: 50,
      locations: ["Taiwan", "Taiwan", "Taiwan", "Taiwan", "Taiwan"],
    });
  });

  test("test error config", () => {
    const config = {
      type: "obj",
      content: {
        name: {
          type: "123",
          generateFn: "John",
        },
      },
    } as ObjectConfig<unknown>;

    expect(() => createGeneratorByType(config)).toThrowError();
  });

  test("with custom type match", () => {
    const createIntValueConfig = (_option) => createValueConfig(() => 50);
    const createEmailValueConfig = (_option) =>
      createValueConfig(() => "xxx@example.com");

    const customTypeMatch = (config) => {
      if (config.type === "int") {
        return createIntValueConfig(config.option);
      }
      if (config.type === "email") {
        return createEmailValueConfig(config.option);
      }

      throw Error("error");
    };

    const config = createObjectConfig({
      name: { type: "value", generateFn: () => "John" },
      age: { type: "int" },
      email: { type: "email" },
    });

    const result = createGeneratorByType(config, customTypeMatch)();

    expect(result).toEqual({
      name: "John",
      age: 50,
      email: "xxx@example.com",
    });
  });
});
