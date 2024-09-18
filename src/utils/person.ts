import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Person [bio](https://fakerjs.dev/api/person.html#bio) */
export const bio = (...options: Parameters<typeof faker.person.bio>) =>
  createValueConfig(() => faker.person.bio(...options));

/** Person [firstName](https://fakerjs.dev/api/person.html#firstName) */
export const firstName = (
  ...options: Parameters<typeof faker.person.firstName>
) => createValueConfig(() => faker.person.firstName(...options));

/** Person [fullName](https://fakerjs.dev/api/person.html#fullName) */
export const fullName = (
  ...options: Parameters<typeof faker.person.fullName>
) => createValueConfig(() => faker.person.fullName(...options));

/** Person [gender](https://fakerjs.dev/api/person.html#gender) */
export const gender = (...options: Parameters<typeof faker.person.gender>) =>
  createValueConfig(() => faker.person.gender(...options));

/** Person [jobArea](https://fakerjs.dev/api/person.html#jobArea) */
export const jobArea = (...options: Parameters<typeof faker.person.jobArea>) =>
  createValueConfig(() => faker.person.jobArea(...options));

/** Person [jobDescriptor](https://fakerjs.dev/api/person.html#jobDescriptor) */
export const jobDescriptor = (
  ...options: Parameters<typeof faker.person.jobDescriptor>
) => createValueConfig(() => faker.person.bio(...options));

/** Person [jobTitle](https://fakerjs.dev/api/person.html#jobTitle) */
export const jobTitle = (
  ...options: Parameters<typeof faker.person.jobTitle>
) => createValueConfig(() => faker.person.jobTitle(...options));

/** Person [jobType](https://fakerjs.dev/api/person.html#jobType) */
export const jobType = (...options: Parameters<typeof faker.person.jobType>) =>
  createValueConfig(() => faker.person.jobType(...options));

/** Person [lastName](https://fakerjs.dev/api/person.html#lastName) */
export const lastName = (
  ...options: Parameters<typeof faker.person.lastName>
) => createValueConfig(() => faker.person.lastName(...options));

/** Person [middleName](https://fakerjs.dev/api/person.html#middleName) */
export const middleName = (
  ...options: Parameters<typeof faker.person.middleName>
) => createValueConfig(() => faker.person.middleName(...options));

/** Person [prefix](https://fakerjs.dev/api/person.html#prefix) */
export const prefix = (...options: Parameters<typeof faker.person.prefix>) =>
  createValueConfig(() => faker.person.prefix(...options));

/** Person [sex](https://fakerjs.dev/api/person.html#sex) */
export const sex = (...options: Parameters<typeof faker.person.sex>) =>
  createValueConfig(() => faker.person.sex(...options));

/** Person [sexType](https://fakerjs.dev/api/person.html#sexType) */
export const sexType = (...options: Parameters<typeof faker.person.sexType>) =>
  createValueConfig(() => faker.person.sexType(...options));

/** Person [suffix](https://fakerjs.dev/api/person.html#suffix) */
export const suffix = (...options: Parameters<typeof faker.person.suffix>) =>
  createValueConfig(() => faker.person.suffix(...options));

/** Person [zodiacSign](https://fakerjs.dev/api/person.html#zodiacSign) */
export const zodiacSign = (
  ...options: Parameters<typeof faker.person.zodiacSign>
) => createValueConfig(() => faker.person.zodiacSign(...options));
