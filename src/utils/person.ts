import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Person [bio](https://fakerjs.dev/api/person.html#bio) */
export const bio = makeValueConfigFn(faker.person.bio);

/** Person [firstName](https://fakerjs.dev/api/person.html#firstName) */
export const firstName = makeValueConfigFn(faker.person.firstName);

/** Person [fullName](https://fakerjs.dev/api/person.html#fullName) */
export const fullName = makeValueConfigFn(faker.person.fullName);

/** Person [gender](https://fakerjs.dev/api/person.html#gender) */
export const gender = makeValueConfigFn(faker.person.gender);

/** Person [jobArea](https://fakerjs.dev/api/person.html#jobArea) */
export const jobArea = makeValueConfigFn(faker.person.jobArea);

/** Person [jobDescriptor](https://fakerjs.dev/api/person.html#jobDescriptor) */
export const jobDescriptor = makeValueConfigFn(faker.person.jobDescriptor);

/** Person [jobTitle](https://fakerjs.dev/api/person.html#jobTitle) */
export const jobTitle = makeValueConfigFn(faker.person.jobTitle);

/** Person [jobType](https://fakerjs.dev/api/person.html#jobType) */
export const jobType = makeValueConfigFn(faker.person.jobType);

/** Person [lastName](https://fakerjs.dev/api/person.html#lastName) */
export const lastName = makeValueConfigFn(faker.person.lastName);

/** Person [middleName](https://fakerjs.dev/api/person.html#middleName) */
export const middleName = makeValueConfigFn(faker.person.middleName);

/** Person [prefix](https://fakerjs.dev/api/person.html#prefix) */
export const prefix = makeValueConfigFn(faker.person.prefix);

/** Person [sex](https://fakerjs.dev/api/person.html#sex) */
export const sex = makeValueConfigFn(faker.person.sex);

/** Person [sexType](https://fakerjs.dev/api/person.html#sexType) */
export const sexType = makeValueConfigFn(faker.person.sexType);

/** Person [suffix](https://fakerjs.dev/api/person.html#suffix) */
export const suffix = makeValueConfigFn(faker.person.suffix);

/** Person [zodiacSign](https://fakerjs.dev/api/person.html#zodiacSign) */
export const zodiacSign = makeValueConfigFn(faker.person.zodiacSign);
