import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Science [chemicalElement](https://fakerjs.dev/api/science.html#chemicalElement) */
export const chemicalElement = makeValueConfigFn(faker.science.chemicalElement);

/** Science [unit](https://fakerjs.dev/api/science.html#unit) */
export const unit = makeValueConfigFn(faker.science.unit);
