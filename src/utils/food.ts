import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Food [adjective](https://fakerjs.dev/api/food.html#adjective) */
export const adjective = makeValueConfigFn(faker.food.adjective);

/** Food [description](https://fakerjs.dev/api/food.html#description) */
export const description = makeValueConfigFn(faker.food.description);

/** Food [dish](https://fakerjs.dev/api/food.html#dish) */
export const dish = makeValueConfigFn(faker.food.dish);

/** Food [ethnicCategory](https://fakerjs.dev/api/food.html#ethnicCategory) */
export const ethnicCategory = makeValueConfigFn(faker.food.ethnicCategory);

/** Food [fruit](https://fakerjs.dev/api/food.html#fruit) */
export const fruit = makeValueConfigFn(faker.food.fruit);

/** Food [ingredient](https://fakerjs.dev/api/food.html#ingredient) */
export const ingredient = makeValueConfigFn(faker.food.ingredient);

/** Food [meat](https://fakerjs.dev/api/food.html#meat) */
export const meat = makeValueConfigFn(faker.food.meat);

/** Food [spice](https://fakerjs.dev/api/food.html#spice) */
export const spice = makeValueConfigFn(faker.food.spice);

/** Food [vegetable](https://fakerjs.dev/api/food.html#vegetable) */
export const vegetable = makeValueConfigFn(faker.food.vegetable);
