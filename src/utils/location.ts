import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Location [buildingNumber](https://fakerjs.dev/api/location.html#buildingNumber) */
export const buildingNumber = makeValueConfigFn(faker.location.buildingNumber);

/** Location [cardinalDirection](https://fakerjs.dev/api/location.html#cardinalDirection) */
export const cardinalDirection = makeValueConfigFn(
    faker.location.cardinalDirection,
);

/** Location [city](https://fakerjs.dev/api/location.html#city) */
export const city = makeValueConfigFn(faker.location.city);

/** Location [country](https://fakerjs.dev/api/location.html#country) */
export const country = makeValueConfigFn(faker.location.country);

/** Location [countryCode](https://fakerjs.dev/api/location.html#countryCode) */
export const countryCode = makeValueConfigFn(faker.location.countryCode);

/** Location [county](https://fakerjs.dev/api/location.html#county) */
export const county = makeValueConfigFn(faker.location.county);

/** Location [direction](https://fakerjs.dev/api/location.html#direction) */
export const direction = makeValueConfigFn(faker.location.direction);

/** Location [latitude](https://fakerjs.dev/api/location.html#latitude) */
export const latitude = makeValueConfigFn(faker.location.latitude);

/** Location [longitude](https://fakerjs.dev/api/location.html#longitude) */
export const longitude = makeValueConfigFn(faker.location.longitude);

/** Location [nearbyGPSCoordinate](https://fakerjs.dev/api/location.html#nearbyGPSCoordinate) */
export const nearbyGPSCoordinate = makeValueConfigFn(
    faker.location.nearbyGPSCoordinate,
);

/** Location [ordinalDirection](https://fakerjs.dev/api/location.html#ordinalDirection) */
export const ordinalDirection = makeValueConfigFn(
    faker.location.ordinalDirection,
);

/** Location [secondaryAddress](https://fakerjs.dev/api/location.html#secondaryAddress) */
export const secondaryAddress = makeValueConfigFn(
    faker.location.secondaryAddress,
);

/** Location [state](https://fakerjs.dev/api/location.html#state) */
export const state = makeValueConfigFn(faker.location.state);

/** Location [street](https://fakerjs.dev/api/location.html#street) */
export const street = makeValueConfigFn(faker.location.street);

/** Location [streetAddress](https://fakerjs.dev/api/location.html#streetAddress) */
export const streetAddress = makeValueConfigFn(faker.location.streetAddress);

/** Location [timeZone](https://fakerjs.dev/api/location.html#timeZone) */
export const timeZone = makeValueConfigFn(faker.location.timeZone);
