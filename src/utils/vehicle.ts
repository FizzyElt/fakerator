import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Vehicle [bicycle](https://fakerjs.dev/api/vehicle.html#bicycle) */
export const bicycle = makeValueConfigFn(faker.vehicle.bicycle);

/** Vehicle [color](https://fakerjs.dev/api/vehicle.html#color) */
export const color = makeValueConfigFn(faker.vehicle.color);

/** Vehicle [fuel](https://fakerjs.dev/api/vehicle.html#fuel) */
export const fuel = makeValueConfigFn(faker.vehicle.fuel);

/** Vehicle [manufacturer](https://fakerjs.dev/api/vehicle.html#manufacturer) */
export const manufacturer = makeValueConfigFn(faker.vehicle.manufacturer);

/** Vehicle [model](https://fakerjs.dev/api/vehicle.html#model) */
export const model = makeValueConfigFn(faker.vehicle.model);

/** Vehicle [type](https://fakerjs.dev/api/vehicle.html#type) */
export const type = makeValueConfigFn(faker.vehicle.type);

/** Vehicle [vehicle](https://fakerjs.dev/api/vehicle.html#vehicle) */
export const vehicle = makeValueConfigFn(faker.vehicle.vehicle);

/** Vehicle [vin](https://fakerjs.dev/api/vehicle.html#vin) */
export const vin = makeValueConfigFn(faker.vehicle.vin);

/** Vehicle [vrm](https://fakerjs.dev/api/vehicle.html#vrm) */
export const vrm = makeValueConfigFn(faker.vehicle.vrm);
