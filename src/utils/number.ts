import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Number [bigInt](https://fakerjs.dev/api/number.html#bigInt) */
export const bigInt = makeValueConfigFn(faker.number.bigInt);

/** Number [binary](https://fakerjs.dev/api/number.html#binary) */
export const binary = makeValueConfigFn(faker.number.binary);

/** Number [float](https://fakerjs.dev/api/number.html#float) */
export const float = makeValueConfigFn(faker.number.float);

/** Number [hex](https://fakerjs.dev/api/number.html#hex) */
export const hex = makeValueConfigFn(faker.number.hex);

/** Number [int](https://fakerjs.dev/api/number.html#int) */
export const int = makeValueConfigFn(faker.number.int);

/** Number [octal](https://fakerjs.dev/api/number.html#octal) */
export const octal = makeValueConfigFn(faker.number.octal);
