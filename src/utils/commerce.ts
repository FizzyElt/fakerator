import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Commerce [department](https://fakerjs.dev/api/commerce.html#department) */
export const department = (
  ...options: Parameters<typeof faker.commerce.department>
) => createValueConfig(() => faker.commerce.department(...options));

/** Commerce [isbn](https://fakerjs.dev/api/commerce.html#isbn) */
export const isbn = (...options: Parameters<typeof faker.commerce.isbn>) =>
  createValueConfig(() => faker.commerce.isbn(...options));

/** Commerce [price](https://fakerjs.dev/api/commerce.html#price) */
export const price = (...options: Parameters<typeof faker.commerce.price>) =>
  createValueConfig(() => faker.commerce.price(...options));

/** Commerce [product](https://fakerjs.dev/api/commerce.html#product) */
export const product = (
  ...options: Parameters<typeof faker.commerce.product>
) => createValueConfig(() => faker.commerce.product(...options));

/** Commerce [productAdjective](https://fakerjs.dev/api/commerce.html#productAdjective) */
export const productAdjective = (
  ...options: Parameters<typeof faker.commerce.productAdjective>
) => createValueConfig(() => faker.commerce.productAdjective(...options));

/** Commerce [productDescription](https://fakerjs.dev/api/commerce.html#productDescription) */
export const productDescription = (
  ...options: Parameters<typeof faker.commerce.productDescription>
) => createValueConfig(() => faker.commerce.productDescription(...options));

/** Commerce [productMaterial](https://fakerjs.dev/api/commerce.html#productMaterial) */
export const productMaterial = (
  ...options: Parameters<typeof faker.commerce.productMaterial>
) => createValueConfig(() => faker.commerce.productMaterial(...options));

/** Commerce [productName](https://fakerjs.dev/api/commerce.html#productName) */
export const productName = (
  ...options: Parameters<typeof faker.commerce.productName>
) => createValueConfig(() => faker.commerce.productName(...options));
