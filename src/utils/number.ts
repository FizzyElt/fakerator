import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Number [bigInt](https://fakerjs.dev/api/number.html#bigInt) */
export const bigInt = (...options: Parameters<typeof faker.number.bigInt>) =>
  createValueConfig(() => faker.number.bigInt(...options));

/** Number [binary](https://fakerjs.dev/api/number.html#binary) */
export const binary = (...options: Parameters<typeof faker.number.binary>) =>
  createValueConfig(() => faker.number.binary(...options));

/** Number [float](https://fakerjs.dev/api/number.html#float) */
export const float = (...options: Parameters<typeof faker.number.float>) =>
  createValueConfig(() => faker.number.float(...options));

/** Number [hex](https://fakerjs.dev/api/number.html#hex) */
export const hex = (...options: Parameters<typeof faker.number.hex>) =>
  createValueConfig(() => faker.number.hex(...options));

/** Number [int](https://fakerjs.dev/api/number.html#int) */
export const int = (...options: Parameters<typeof faker.number.int>) =>
  createValueConfig(() => faker.number.int(...options));

/** Number [octal](https://fakerjs.dev/api/number.html#octal) */
export const octal = (...options: Parameters<typeof faker.number.octal>) =>
  createValueConfig(() => faker.number.octal(...options));
