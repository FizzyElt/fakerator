import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Airline [aircraftType](https://fakerjs.dev/api/airline.html#aircraftType) */
export const aircraftType = makeValueConfigFn(faker.airline.aircraftType);

/** Airline [flightNumber](https://fakerjs.dev/api/airline.html#flightNumber) */
export const flightNumber = makeValueConfigFn(faker.airline.flightNumber);

/** Airline [seat](https://fakerjs.dev/api/airline.html#seat) */
export const seat = makeValueConfigFn(faker.airline.seat);
