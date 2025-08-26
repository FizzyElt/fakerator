import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Company [buzzAdjective](https://fakerjs.dev/api/company.html#buzzAdjective) */
export const buzzAdjective = makeValueConfigFn(faker.company.buzzAdjective);

/** Company [buzzNoun](https://fakerjs.dev/api/company.html#buzzNoun) */
export const buzzNoun = makeValueConfigFn(faker.company.buzzNoun);

/** Company [buzzPhrase](https://fakerjs.dev/api/company.html#buzzPhrase) */
export const buzzPhrase = makeValueConfigFn(faker.company.buzzPhrase);

/** Company [buzzVerb](https://fakerjs.dev/api/company.html#buzzVerb) */
export const buzzVerb = makeValueConfigFn(faker.company.buzzVerb);

/** Company [catchPhrase](https://fakerjs.dev/api/company.html#catchPhrase) */
export const catchPhrase = makeValueConfigFn(faker.company.catchPhrase);

/** Company [catchPhraseAdjective](https://fakerjs.dev/api/company.html#catchPhraseAdjective) */
export const catchPhraseAdjective = makeValueConfigFn(
    faker.company.catchPhraseAdjective,
);

/** Company [catchPhraseDescriptor](https://fakerjs.dev/api/company.html#catchPhraseDescriptor) */
export const catchPhraseDescriptor = makeValueConfigFn(
    faker.company.catchPhraseDescriptor,
);

/** Company [catchPhraseNoun](https://fakerjs.dev/api/company.html#catchPhraseNoun) */
export const catchPhraseNoun = makeValueConfigFn(faker.company.catchPhraseNoun);

/** Company [name](https://fakerjs.dev/api/company.html#name) */
export const name = makeValueConfigFn(faker.company.name);
