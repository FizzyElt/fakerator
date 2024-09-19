import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Location [buildingNumber](https://fakerjs.dev/api/location.html#buildingNumber) */
export const buildingNumber = (
  ...options: Parameters<typeof faker.location.buildingNumber>
) => createValueConfig(() => faker.location.buildingNumber(...options));

/** Location [cardinalDirection](https://fakerjs.dev/api/location.html#cardinalDirection) */
export const cardinalDirection = (
  ...options: Parameters<typeof faker.location.cardinalDirection>
) => createValueConfig(() => faker.location.cardinalDirection(...options));

/** Location [city](https://fakerjs.dev/api/location.html#city) */
export const city = (...options: Parameters<typeof faker.location.city>) =>
  createValueConfig(() => faker.location.city(...options));

/** Location [country](https://fakerjs.dev/api/location.html#country) */
export const country = (
  ...options: Parameters<typeof faker.location.country>
) => createValueConfig(() => faker.location.country(...options));

/** Location [countryCode](https://fakerjs.dev/api/location.html#countryCode) */
export const countryCode = (
  ...options: Parameters<typeof faker.location.countryCode>
) => createValueConfig(() => faker.location.countryCode(...options));

/** Location [county](https://fakerjs.dev/api/location.html#county) */
export const county = (...options: Parameters<typeof faker.location.county>) =>
  createValueConfig(() => faker.location.county(...options));

/** Location [direction](https://fakerjs.dev/api/location.html#direction) */
export const direction = (
  ...options: Parameters<typeof faker.location.direction>
) => createValueConfig(() => faker.location.direction(...options));

/** Location [latitude](https://fakerjs.dev/api/location.html#latitude) */
export const latitude = (
  ...options: Parameters<typeof faker.location.latitude>
) => createValueConfig(() => faker.location.latitude(...options));

/** Location [longitude](https://fakerjs.dev/api/location.html#longitude) */
export const longitude = (
  ...options: Parameters<typeof faker.location.longitude>
) => createValueConfig(() => faker.location.longitude(...options));

/** Location [nearbyGPSCoordinate](https://fakerjs.dev/api/location.html#nearbyGPSCoordinate) */
export const nearbyGPSCoordinate = (
  ...options: Parameters<typeof faker.location.nearbyGPSCoordinate>
) => createValueConfig(() => faker.location.nearbyGPSCoordinate(...options));

/** Location [ordinalDirection](https://fakerjs.dev/api/location.html#ordinalDirection) */
export const ordinalDirection = (
  ...options: Parameters<typeof faker.location.ordinalDirection>
) => createValueConfig(() => faker.location.ordinalDirection(...options));

/** Location [secondaryAddress](https://fakerjs.dev/api/location.html#secondaryAddress) */
export const secondaryAddress = (
  ...options: Parameters<typeof faker.location.secondaryAddress>
) => createValueConfig(() => faker.location.secondaryAddress(...options));

/** Location [state](https://fakerjs.dev/api/location.html#state) */
export const state = (...options: Parameters<typeof faker.location.state>) =>
  createValueConfig(() => faker.location.state(...options));

/** Location [street](https://fakerjs.dev/api/location.html#street) */
export const street = (...options: Parameters<typeof faker.location.street>) =>
  createValueConfig(() => faker.location.street(...options));

/** Location [streetAddress](https://fakerjs.dev/api/location.html#streetAddress) */
export const streetAddress = (
  ...options: Parameters<typeof faker.location.streetAddress>
) => createValueConfig(() => faker.location.streetAddress(...options));

/** Location [timeZone](https://fakerjs.dev/api/location.html#timeZone) */
export const timeZone = (
  ...options: Parameters<typeof faker.location.timeZone>
) => createValueConfig(() => faker.location.timeZone(...options));
