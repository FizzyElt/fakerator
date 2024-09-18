import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Database [collation](https://fakerjs.dev/api/database.html#collation) */
export const collation = (
  ...options: Parameters<typeof faker.database.collation>
) => createValueConfig(() => faker.database.collation(...options));

/** Database [column](https://fakerjs.dev/api/database.html#column) */
export const column = (...options: Parameters<typeof faker.database.column>) =>
  createValueConfig(() => faker.database.column(...options));

/** Database [engine](https://fakerjs.dev/api/database.html#engine) */
export const engine = (...options: Parameters<typeof faker.database.engine>) =>
  createValueConfig(() => faker.database.engine(...options));

/** Database [mongodbObjectId](https://fakerjs.dev/api/database.html#mongodbObjectId) */
export const mongodbObjectId = (
  ...options: Parameters<typeof faker.database.mongodbObjectId>
) => createValueConfig(() => faker.database.mongodbObjectId(...options));

/** Database [type](https://fakerjs.dev/api/database.html#type) */
export const type = (...options: Parameters<typeof faker.database.type>) =>
  createValueConfig(() => faker.database.type(...options));
