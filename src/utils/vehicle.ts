import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Vehicle [bicycle](https://fakerjs.dev/api/vehicle.html#bicycle) */
export const bicycle = (...options: Parameters<typeof faker.vehicle.bicycle>) =>
  createValueConfig(() => faker.vehicle.bicycle(...options));

/** Vehicle [color](https://fakerjs.dev/api/vehicle.html#color) */
export const color = (...options: Parameters<typeof faker.vehicle.color>) =>
  createValueConfig(() => faker.vehicle.color(...options));

/** Vehicle [fuel](https://fakerjs.dev/api/vehicle.html#fuel) */
export const fuel = (...options: Parameters<typeof faker.vehicle.fuel>) =>
  createValueConfig(() => faker.vehicle.fuel(...options));

/** Vehicle [manufacturer](https://fakerjs.dev/api/vehicle.html#manufacturer) */
export const manufacturer = (
  ...options: Parameters<typeof faker.vehicle.manufacturer>
) => createValueConfig(() => faker.vehicle.manufacturer(...options));

/** Vehicle [model](https://fakerjs.dev/api/vehicle.html#model) */
export const model = (...options: Parameters<typeof faker.vehicle.model>) =>
  createValueConfig(() => faker.vehicle.model(...options));

/** Vehicle [type](https://fakerjs.dev/api/vehicle.html#type) */
export const type = (...options: Parameters<typeof faker.vehicle.type>) =>
  createValueConfig(() => faker.vehicle.type(...options));

/** Vehicle [vehicle](https://fakerjs.dev/api/vehicle.html#vehicle) */
export const vehicle = (...options: Parameters<typeof faker.vehicle.vehicle>) =>
  createValueConfig(() => faker.vehicle.vehicle(...options));

/** Vehicle [vin](https://fakerjs.dev/api/vehicle.html#vin) */
export const vin = (...options: Parameters<typeof faker.vehicle.vin>) =>
  createValueConfig(() => faker.vehicle.vin(...options));

/** Vehicle [vrm](https://fakerjs.dev/api/vehicle.html#vrm) */
export const vrm = (...options: Parameters<typeof faker.vehicle.vrm>) =>
  createValueConfig(() => faker.vehicle.vrm(...options));
