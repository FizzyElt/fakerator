import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Hacker [abbreviation](https://fakerjs.dev/api/hacker.html#abbreviation) */
export const abbreviation = makeValueConfigFn(faker.hacker.abbreviation);

/** Hacker [adjective](https://fakerjs.dev/api/hacker.html#adjective) */
export const adjective = makeValueConfigFn(faker.hacker.adjective);

/** Hacker [ingverb](https://fakerjs.dev/api/hacker.html#ingverb) */
export const ingverb = makeValueConfigFn(faker.hacker.ingverb);

/** Hacker [noun](https://fakerjs.dev/api/hacker.html#noun) */
export const noun = makeValueConfigFn(faker.hacker.noun);

/** Hacker [phrase](https://fakerjs.dev/api/hacker.html#phrase) */
export const phrase = makeValueConfigFn(faker.hacker.phrase);

/** Hacker [verb](https://fakerjs.dev/api/hacker.html#verb) */
export const verb = makeValueConfigFn(faker.hacker.verb);
