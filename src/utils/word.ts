import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Word [adjective](https://fakerjs.dev/word.html#adjective) */
export const adjective = makeValueConfigFn(faker.word.adjective);

/** Word [adverb](https://fakerjs.dev/word.html#adverb) */
export const adverb = makeValueConfigFn(faker.word.adverb);

/** Word [conjunction](https://fakerjs.dev/word.html#conjunction) */
export const conjunction = makeValueConfigFn(faker.word.conjunction);

/** Word [interjection](https://fakerjs.dev/word.html#interjection) */
export const interjection = makeValueConfigFn(faker.word.interjection);

/** Word [noun](https://fakerjs.dev/word.html#noun) */
export const noun = makeValueConfigFn(faker.word.noun);

/** Word [preposition](https://fakerjs.dev/word.html#preposition) */
export const preposition = makeValueConfigFn(faker.word.preposition);

/** Word [sample](https://fakerjs.dev/word.html#sample) */
export const sample = makeValueConfigFn(faker.word.sample);

/** Word [verb](https://fakerjs.dev/word.html#verb) */
export const verb = makeValueConfigFn(faker.word.verb);

/** Word [words](https://fakerjs.dev/word.html#words) */
export const words = makeValueConfigFn(faker.word.words);
