import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Book [author](https://fakerjs.dev/api/book.html#author) */
export const author = makeValueConfigFn(faker.book.author);

/** Book [format](https://fakerjs.dev/api/book.html#format) */
export const format = makeValueConfigFn(faker.book.format);

/** Book [genre](https://fakerjs.dev/api/book.html#genre) */
export const genre = makeValueConfigFn(faker.book.genre);

/** Book [publisher](https://fakerjs.dev/api/book.html#publisher) */
export const publisher = makeValueConfigFn(faker.book.publisher);

/** Book [series](https://fakerjs.dev/api/book.html#series) */
export const series = makeValueConfigFn(faker.book.series);

/** Book [title](https://fakerjs.dev/api/book.html#title) */
export const title = makeValueConfigFn(faker.book.title);
