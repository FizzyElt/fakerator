import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Database [collation](https://fakerjs.dev/api/database.html#collation) */
export const collation = makeValueConfigFn(faker.database.collation);

/** Database [column](https://fakerjs.dev/api/database.html#column) */
export const column = makeValueConfigFn(faker.database.column);

/** Database [engine](https://fakerjs.dev/api/database.html#engine) */
export const engine = makeValueConfigFn(faker.database.engine);

/** Database [mongodbObjectId](https://fakerjs.dev/api/database.html#mongodbObjectId) */
export const mongodbObjectId = makeValueConfigFn(
  faker.database.mongodbObjectId,
);

/** Database [type](https://fakerjs.dev/api/database.html#type) */
export const type = makeValueConfigFn(faker.database.type);
