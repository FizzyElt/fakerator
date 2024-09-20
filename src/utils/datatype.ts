import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Datatype [boolean](https://fakerjs.dev/api/datatype.html#boolean) */
export const boolean = makeValueConfigFn(faker.datatype.boolean);
