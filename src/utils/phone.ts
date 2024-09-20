import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Phone [imei](https://fakerjs.dev/api/phone.html#imei) */
export const imei = makeValueConfigFn(faker.phone.imei);

/** Phone [number](https://fakerjs.dev/api/phone.html#number) */
export const number = makeValueConfigFn(faker.phone.number);
