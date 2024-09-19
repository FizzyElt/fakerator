import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Hacker [abbreviation](https://fakerjs.dev/api/hacker.html#abbreviation) */
export const abbreviation = (
  ...options: Parameters<typeof faker.hacker.abbreviation>
) => createValueConfig(() => faker.hacker.abbreviation(...options));

/** Hacker [adjective](https://fakerjs.dev/api/hacker.html#adjective) */
export const adjective = (
  ...options: Parameters<typeof faker.hacker.adjective>
) => createValueConfig(() => faker.hacker.adjective(...options));

/** Hacker [ingverb](https://fakerjs.dev/api/hacker.html#ingverb) */
export const ingverb = (...options: Parameters<typeof faker.hacker.ingverb>) =>
  createValueConfig(() => faker.hacker.ingverb(...options));

/** Hacker [noun](https://fakerjs.dev/api/hacker.html#noun) */
export const noun = (...options: Parameters<typeof faker.hacker.noun>) =>
  createValueConfig(() => faker.hacker.noun(...options));

/** Hacker [phrase](https://fakerjs.dev/api/hacker.html#phrase) */
export const phrase = (...options: Parameters<typeof faker.hacker.phrase>) =>
  createValueConfig(() => faker.hacker.phrase(...options));

/** Hacker [verb](https://fakerjs.dev/api/hacker.html#verb) */
export const verb = (...options: Parameters<typeof faker.hacker.verb>) =>
  createValueConfig(() => faker.hacker.verb(...options));
