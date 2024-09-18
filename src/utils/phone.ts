import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Phone [imei](https://fakerjs.dev/api/phone.html#imei) */
export const imei = (...options: Parameters<typeof faker.phone.imei>) =>
  createValueConfig(() => faker.phone.imei(...options));

/** Phone [number](https://fakerjs.dev/api/phone.html#number) */
export const number = (...options: Parameters<typeof faker.phone.number>) =>
  createValueConfig(() => faker.phone.number(...options));
