import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Animal [bear](https://fakerjs.dev/api/animal.html#bear) */
export const bear = (...options: Parameters<typeof faker.animal.bear>) =>
  createValueConfig(() => faker.animal.bear(...options));

/** Animal [bird](https://fakerjs.dev/api/animal.html#bird) */
export const bird = (...options: Parameters<typeof faker.animal.bird>) =>
  createValueConfig(() => faker.animal.bird(...options));

/** Animal [cat](https://fakerjs.dev/api/animal.html#cat) */
export const cat = (...options: Parameters<typeof faker.animal.cat>) =>
  createValueConfig(() => faker.animal.cat(...options));

/** Animal [cetacean](https://fakerjs.dev/api/animal.html#cetacean) */
export const cetacean = (
  ...options: Parameters<typeof faker.animal.cetacean>
) => createValueConfig(() => faker.animal.cetacean(...options));

/** Animal [cow](https://fakerjs.dev/api/animal.html#cow) */
export const cow = (...options: Parameters<typeof faker.animal.cow>) =>
  createValueConfig(() => faker.animal.cow(...options));

/** Animal [crocodilia](https://fakerjs.dev/api/animal.html#crocodilia) */
export const crocodilia = (
  ...options: Parameters<typeof faker.animal.crocodilia>
) => createValueConfig(() => faker.animal.crocodilia(...options));

/** Animal [dog](https://fakerjs.dev/api/animal.html#dog) */
export const dog = (...options: Parameters<typeof faker.animal.dog>) =>
  createValueConfig(() => faker.animal.dog(...options));

/** Animal [fish](https://fakerjs.dev/api/animal.html#fish) */
export const fish = (...options: Parameters<typeof faker.animal.fish>) =>
  createValueConfig(() => faker.animal.fish(...options));

/** Animal [horse](https://fakerjs.dev/api/animal.html#horse) */
export const horse = (...options: Parameters<typeof faker.animal.horse>) =>
  createValueConfig(() => faker.animal.horse(...options));

/** Animal [insect](https://fakerjs.dev/api/animal.html#insect) */
export const insect = (...options: Parameters<typeof faker.animal.insect>) =>
  createValueConfig(() => faker.animal.insect(...options));

/** Animal [lion](https://fakerjs.dev/api/animal.html#lion) */
export const lion = (...options: Parameters<typeof faker.animal.lion>) =>
  createValueConfig(() => faker.animal.lion(...options));

/** Animal [rabbit](https://fakerjs.dev/api/animal.html#rabbit) */
export const rabbit = (...options: Parameters<typeof faker.animal.rabbit>) =>
  createValueConfig(() => faker.animal.rabbit(...options));

/** Animal [rodent](https://fakerjs.dev/api/animal.html#rodent) */
export const rodent = (...options: Parameters<typeof faker.animal.rodent>) =>
  createValueConfig(() => faker.animal.rodent(...options));

/** Animal [snake](https://fakerjs.dev/api/animal.html#snake) */
export const snake = (...options: Parameters<typeof faker.animal.snake>) =>
  createValueConfig(() => faker.animal.snake(...options));

/** Animal [type](https://fakerjs.dev/api/animal.html#type) */
export const type = (...options: Parameters<typeof faker.animal.type>) =>
  createValueConfig(() => faker.animal.type(...options));
