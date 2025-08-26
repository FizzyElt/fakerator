import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Commerce [department](https://fakerjs.dev/api/commerce.html#department) */
export const department = makeValueConfigFn(faker.commerce.department);

/** Commerce [isbn](https://fakerjs.dev/api/commerce.html#isbn) */
export const isbn = makeValueConfigFn(faker.commerce.isbn);

/** Commerce [price](https://fakerjs.dev/api/commerce.html#price) */
export const price = makeValueConfigFn(faker.commerce.price);

/** Commerce [product](https://fakerjs.dev/api/commerce.html#product) */
export const product = makeValueConfigFn(faker.commerce.product);

/** Commerce [productAdjective](https://fakerjs.dev/api/commerce.html#productAdjective) */
export const productAdjective = makeValueConfigFn(
    faker.commerce.productAdjective,
);

/** Commerce [productDescription](https://fakerjs.dev/api/commerce.html#productDescription) */
export const productDescription = makeValueConfigFn(
    faker.commerce.productDescription,
);

/** Commerce [productMaterial](https://fakerjs.dev/api/commerce.html#productMaterial) */
export const productMaterial = makeValueConfigFn(
    faker.commerce.productMaterial,
);

/** Commerce [productName](https://fakerjs.dev/api/commerce.html#productName) */
export const productName = makeValueConfigFn(faker.commerce.productName);
