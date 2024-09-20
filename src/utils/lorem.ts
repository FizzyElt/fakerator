import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Lorem [lines](https://fakerjs.dev/api/lorem.html#lines) */
export const lines = makeValueConfigFn(faker.lorem.lines);

/** Lorem [paragraph](https://fakerjs.dev/api/lorem.html#paragraph) */
export const paragraph = makeValueConfigFn(faker.lorem.paragraph);

/** Lorem [paragraphs](https://fakerjs.dev/api/lorem.html#paragraphs) */
export const paragraphs = makeValueConfigFn(faker.lorem.paragraphs);

/** Lorem [sentence](https://fakerjs.dev/api/lorem.html#sentence) */
export const sentence = makeValueConfigFn(faker.lorem.sentence);

/** Lorem [sentences](https://fakerjs.dev/api/lorem.html#sentences) */
export const sentences = makeValueConfigFn(faker.lorem.sentences);

/** Lorem [slug](https://fakerjs.dev/api/lorem.html#slug) */
export const slug = makeValueConfigFn(faker.lorem.slug);

/** Lorem [text](https://fakerjs.dev/api/lorem.html#text) */
export const text = makeValueConfigFn(faker.lorem.text);

/** Lorem [word](https://fakerjs.dev/api/lorem.html#word) */
export const word = makeValueConfigFn(faker.lorem.word);

/** Lorem [words](https://fakerjs.dev/api/lorem.html#words) */
export const words = makeValueConfigFn(faker.lorem.words);
