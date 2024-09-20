import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** String [alpha](https://fakerjs.dev/api/string.html#alpha) */
export const alpha = makeValueConfigFn(faker.string.alpha);

/** String [alphanumeric](https://fakerjs.dev/api/string.html#alphanumeric) */
export const alphanumeric = makeValueConfigFn(faker.string.alphanumeric);

/** String [binary](https://fakerjs.dev/api/string.html#binary) */
export const binary = makeValueConfigFn(faker.string.binary);

/** String [fromCharacters](https://fakerjs.dev/api/string.html#fromCharacters) */
export const fromCharacters = makeValueConfigFn(faker.string.fromCharacters);

/** String [hexadecimal](https://fakerjs.dev/api/string.html#hexadecimal) */
export const hexadecimal = makeValueConfigFn(faker.string.hexadecimal);

/** String [nanoid](https://fakerjs.dev/api/string.html#nanoid) */
export const nanoid = makeValueConfigFn(faker.string.nanoid);

/** String [octal](https://fakerjs.dev/api/string.html#octal) */
export const octal = makeValueConfigFn(faker.string.octal);

/** String [sample](https://fakerjs.dev/api/string.html#sample) */
export const sample = makeValueConfigFn(faker.string.sample);

/** String [symbol](https://fakerjs.dev/api/string.html#symbol) */
export const symbol = makeValueConfigFn(faker.string.symbol);

/** String [uuid](https://fakerjs.dev/api/string.html#uuid) */
export const uuid = makeValueConfigFn(faker.string.uuid);
