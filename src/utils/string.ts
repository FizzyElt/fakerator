import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** String [alpha](https://fakerjs.dev/api/string.html#alpha) */
export const alpha = (...options: Parameters<typeof faker.string.alpha>) =>
  createValueConfig(() => faker.string.alpha(...options));

/** String [alphanumeric](https://fakerjs.dev/api/string.html#alphanumeric) */
export const alphanumeric = (
  ...options: Parameters<typeof faker.string.alphanumeric>
) => createValueConfig(() => faker.string.alphanumeric(...options));

/** String [binary](https://fakerjs.dev/api/string.html#binary) */
export const binary = (...options: Parameters<typeof faker.string.binary>) =>
  createValueConfig(() => faker.string.binary(...options));

/** String [fromCharacters](https://fakerjs.dev/api/string.html#fromCharacters) */
export const fromCharacters = (
  ...options: Parameters<typeof faker.string.fromCharacters>
) => createValueConfig(() => faker.string.fromCharacters(...options));

/** String [hexadecimal](https://fakerjs.dev/api/string.html#hexadecimal) */
export const hexadecimal = (
  ...options: Parameters<typeof faker.string.hexadecimal>
) => createValueConfig(() => faker.string.hexadecimal(...options));

/** String [nanoid](https://fakerjs.dev/api/string.html#nanoid) */
export const nanoid = (...options: Parameters<typeof faker.string.nanoid>) =>
  createValueConfig(() => faker.string.nanoid(...options));

/** String [octal](https://fakerjs.dev/api/string.html#octal) */
export const octal = (...options: Parameters<typeof faker.string.octal>) =>
  createValueConfig(() => faker.string.octal(...options));

/** String [sample](https://fakerjs.dev/api/string.html#sample) */
export const sample = (...options: Parameters<typeof faker.string.sample>) =>
  createValueConfig(() => faker.string.sample(...options));

/** String [symbol](https://fakerjs.dev/api/string.html#symbol) */
export const symbol = (...options: Parameters<typeof faker.string.symbol>) =>
  createValueConfig(() => faker.string.symbol(...options));

/** String [uuid](https://fakerjs.dev/api/string.html#uuid) */
export const uuid = (...options: Parameters<typeof faker.string.uuid>) =>
  createValueConfig(() => faker.string.uuid(...options));
