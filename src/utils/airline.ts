import { faker } from "@faker-js/faker";
import type { ValueConfig } from "../type";
import { makeValueConfigFn } from "./utils";

/** Airline [aircraftType](https://fakerjs.dev/api/airline.html#aircraftType) */
export const aircraftType = makeValueConfigFn(faker.airline.aircraftType);

type Airline = ReturnType<typeof faker.airline.airline>;
/** Airline [airline](https://fakerjs.dev/api/airline.html#airline) */
export const airline = makeValueConfigFn(
    faker.airline.airline,
) as () => ValueConfig<Airline>;

type Airplane = ReturnType<typeof faker.airline.airplane>;
/** Airline [airplane](https://fakerjs.dev/api/airline.html#airplane) */
export const airplane = makeValueConfigFn(
    faker.airline.airplane,
) as () => ValueConfig<Airplane>;

type Airport = ReturnType<typeof faker.airline.airport>;
/** Airline [airport](https://fakerjs.dev/api/airline.html#airport) */
export const airport = makeValueConfigFn(
    faker.airline.airport,
) as () => ValueConfig<Airport>;

/** Airline [flightNumber](https://fakerjs.dev/api/airline.html#flightNumber) */
export const flightNumber = makeValueConfigFn(faker.airline.flightNumber);

/** Airline [recordLocator](https://fakerjs.dev/api/airline.html#recordLocator) */
export const recordLocator = makeValueConfigFn(faker.airline.recordLocator);

/** Airline [seat](https://fakerjs.dev/api/airline.html#seat) */
export const seat = makeValueConfigFn(faker.airline.seat);
