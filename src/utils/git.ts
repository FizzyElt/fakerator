import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Git [branch](https://fakerjs.dev/api/git.html#branch) */
export const branch = makeValueConfigFn(faker.git.branch);

/** Git [commitDate](https://fakerjs.dev/api/git.html#commitDate) */
export const commitDate = makeValueConfigFn(faker.git.commitDate);

/** Git [commitEntry](https://fakerjs.dev/api/git.html#commitEntry) */
export const commitEntry = makeValueConfigFn(faker.git.commitEntry);

/** Git [commitMessage](https://fakerjs.dev/api/git.html#commitMessage) */
export const commitMessage = makeValueConfigFn(faker.git.commitMessage);

/** Git [commitSha](https://fakerjs.dev/api/git.html#commitSha) */
export const commitSha = makeValueConfigFn(faker.git.commitSha);
