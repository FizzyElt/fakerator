import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Lorem [lines](https://fakerjs.dev/api/lorem.html#lines) */
export const lines = (...options: Parameters<typeof faker.lorem.lines>) =>
  createValueConfig(() => faker.lorem.lines(...options));

/** Lorem [paragraph](https://fakerjs.dev/api/lorem.html#paragraph) */
export const paragraph = (
  ...options: Parameters<typeof faker.lorem.paragraph>
) => createValueConfig(() => faker.lorem.paragraph(...options));

/** Lorem [paragraphs](https://fakerjs.dev/api/lorem.html#paragraphs) */
export const paragraphs = (
  ...options: Parameters<typeof faker.lorem.paragraphs>
) => createValueConfig(() => faker.lorem.paragraphs(...options));

/** Lorem [sentence](https://fakerjs.dev/api/lorem.html#sentence) */
export const sentence = (...options: Parameters<typeof faker.lorem.sentence>) =>
  createValueConfig(() => faker.lorem.sentence(...options));

/** Lorem [sentences](https://fakerjs.dev/api/lorem.html#sentences) */
export const sentences = (
  ...options: Parameters<typeof faker.lorem.sentences>
) => createValueConfig(() => faker.lorem.sentences(...options));

/** Lorem [slug](https://fakerjs.dev/api/lorem.html#slug) */
export const slug = (...options: Parameters<typeof faker.lorem.slug>) =>
  createValueConfig(() => faker.lorem.slug(...options));

/** Lorem [text](https://fakerjs.dev/api/lorem.html#text) */
export const text = (...options: Parameters<typeof faker.lorem.text>) =>
  createValueConfig(() => faker.lorem.text(...options));

/** Lorem [word](https://fakerjs.dev/api/lorem.html#word) */
export const word = (...options: Parameters<typeof faker.lorem.word>) =>
  createValueConfig(() => faker.lorem.word(...options));

/** Lorem [words](https://fakerjs.dev/api/lorem.html#words) */
export const words = (...options: Parameters<typeof faker.lorem.words>) =>
  createValueConfig(() => faker.lorem.words(...options));
