import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Food [adjective](https://fakerjs.dev/api/food.html#adjective) */
export const adjective = (
  ...options: Parameters<typeof faker.food.adjective>
) => createValueConfig(() => faker.food.adjective(...options));

/** Food [description](https://fakerjs.dev/api/food.html#description) */
export const description = (
  ...options: Parameters<typeof faker.food.description>
) => createValueConfig(() => faker.food.description(...options));

/** Food [dish](https://fakerjs.dev/api/food.html#dish) */
export const dish = (...options: Parameters<typeof faker.food.dish>) =>
  createValueConfig(() => faker.food.dish(...options));

/** Food [ethnicCategory](https://fakerjs.dev/api/food.html#ethnicCategory) */
export const ethnicCategory = (
  ...options: Parameters<typeof faker.food.ethnicCategory>
) => createValueConfig(() => faker.food.ethnicCategory(...options));

/** Food [fruit](https://fakerjs.dev/api/food.html#fruit) */
export const fruit = (...options: Parameters<typeof faker.food.fruit>) =>
  createValueConfig(() => faker.food.fruit(...options));

/** Food [ingredient](https://fakerjs.dev/api/food.html#ingredient) */
export const ingredient = (
  ...options: Parameters<typeof faker.food.ingredient>
) => createValueConfig(() => faker.food.ingredient(...options));

/** Food [meat](https://fakerjs.dev/api/food.html#meat) */
export const meat = (...options: Parameters<typeof faker.food.meat>) =>
  createValueConfig(() => faker.food.meat(...options));

/** Food [spice](https://fakerjs.dev/api/food.html#spice) */
export const spice = (...options: Parameters<typeof faker.food.spice>) =>
  createValueConfig(() => faker.food.spice(...options));

/** Food [vegetable](https://fakerjs.dev/api/food.html#vegetable) */
export const vegetable = (
  ...options: Parameters<typeof faker.food.vegetable>
) => createValueConfig(() => faker.food.vegetable(...options));
