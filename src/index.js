import { faker } from "@faker-js/faker";
import { createGeneratorByType } from "./create_generator_fn.js";

const test = {
  type: "obj",
  content: {
    name: {
      type: "value",
      generateFn: () => "hello",
    },
    list: {
      type: "arr",
      item: {
        type: "value",
        generateFn: () => 10,
      },
      len: 5,
    },
  },
};

const generateFn = createGeneratorByType(test);

console.log(generateFn());
