import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Word [adjective](https://fakerjs.dev/word.html#adjective) */
export const adjective = (
  ...options: Parameters<typeof faker.word.adjective>
) => createValueConfig(() => faker.word.adjective(...options));

/** Word [adverb](https://fakerjs.dev/word.html#adverb) */
export const adverb = (...options: Parameters<typeof faker.word.adverb>) =>
  createValueConfig(() => faker.word.adverb(...options));

/** Word [conjunction](https://fakerjs.dev/word.html#conjunction) */
export const conjunction = (
  ...options: Parameters<typeof faker.word.conjunction>
) => createValueConfig(() => faker.word.conjunction(...options));

/** Word [interjection](https://fakerjs.dev/word.html#interjection) */
export const interjection = (
  ...options: Parameters<typeof faker.word.interjection>
) => createValueConfig(() => faker.word.interjection(...options));

/** Word [noun](https://fakerjs.dev/word.html#noun) */
export const noun = (...options: Parameters<typeof faker.word.noun>) =>
  createValueConfig(() => faker.word.noun(...options));

/** Word [preposition](https://fakerjs.dev/word.html#preposition) */
export const preposition = (
  ...options: Parameters<typeof faker.word.preposition>
) => createValueConfig(() => faker.word.preposition(...options));

/** Word [sample](https://fakerjs.dev/word.html#sample) */
export const sample = (...options: Parameters<typeof faker.word.sample>) =>
  createValueConfig(() => faker.word.sample(...options));

/** Word [verb](https://fakerjs.dev/word.html#verb) */
export const verb = (...options: Parameters<typeof faker.word.verb>) =>
  createValueConfig(() => faker.word.verb(...options));

/** Word [words](https://fakerjs.dev/word.html#words) */
export const words = (...options: Parameters<typeof faker.word.words>) =>
  createValueConfig(() => faker.word.words(...options));
