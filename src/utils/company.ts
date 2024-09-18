import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Company [buzzAdjective](https://fakerjs.dev/api/company.html#buzzAdjective) */
export const buzzAdjective = (
  ...options: Parameters<typeof faker.company.buzzAdjective>
) => createValueConfig(() => faker.company.buzzAdjective(...options));

/** Company [buzzNoun](https://fakerjs.dev/api/company.html#buzzNoun) */
export const buzzNoun = (
  ...options: Parameters<typeof faker.company.buzzNoun>
) => createValueConfig(() => faker.company.buzzNoun(...options));

/** Company [buzzPhrase](https://fakerjs.dev/api/company.html#buzzPhrase) */
export const buzzPhrase = (
  ...options: Parameters<typeof faker.company.buzzPhrase>
) => createValueConfig(() => faker.company.buzzPhrase(...options));

/** Company [buzzVerb](https://fakerjs.dev/api/company.html#buzzVerb) */
export const buzzVerb = (
  ...options: Parameters<typeof faker.company.buzzVerb>
) => createValueConfig(() => faker.company.buzzVerb(...options));

/** Company [catchPhrase](https://fakerjs.dev/api/company.html#catchPhrase) */
export const catchPhrase = (
  ...options: Parameters<typeof faker.company.catchPhrase>
) => createValueConfig(() => faker.company.catchPhrase(...options));

/** Company [catchPhraseAdjective](https://fakerjs.dev/api/company.html#catchPhraseAdjective) */
export const catchPhraseAdjective = (
  ...options: Parameters<typeof faker.company.catchPhraseAdjective>
) => createValueConfig(() => faker.company.catchPhraseAdjective(...options));

/** Company [catchPhraseDescriptor](https://fakerjs.dev/api/company.html#catchPhraseDescriptor) */
export const catchPhraseDescriptor = (
  ...options: Parameters<typeof faker.company.catchPhraseDescriptor>
) => createValueConfig(() => faker.company.catchPhraseDescriptor(...options));

/** Company [catchPhraseNoun](https://fakerjs.dev/api/company.html#catchPhraseNoun) */
export const catchPhraseNoun = (
  ...options: Parameters<typeof faker.company.catchPhraseNoun>
) => createValueConfig(() => faker.company.catchPhraseNoun(...options));

/** Company [name](https://fakerjs.dev/api/company.html#name) */
export const name = (...options: Parameters<typeof faker.company.name>) =>
  createValueConfig(() => faker.company.name(...options));
