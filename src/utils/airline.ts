import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Airline [aircraftType](https://fakerjs.dev/api/airline.html#aircraftType) */
export const aircraftType = (
  ...options: Parameters<typeof faker.airline.aircraftType>
) => createValueConfig(() => faker.airline.aircraftType(...options));

/** Airline [flightNumber](https://fakerjs.dev/api/airline.html#flightNumber) */
export const flightNumber = (
  ...options: Parameters<typeof faker.airline.flightNumber>
) => createValueConfig(() => faker.airline.flightNumber(...options));

/** Airline [seat](https://fakerjs.dev/api/airline.html#seat) */
export const seat = (...options: Parameters<typeof faker.airline.seat>) =>
  createValueConfig(() => faker.airline.seat(...options));
