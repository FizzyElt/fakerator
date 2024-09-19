import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Git [branch](https://fakerjs.dev/api/git.html#branch) */
export const branch = (...options: Parameters<typeof faker.git.branch>) =>
  createValueConfig(() => faker.git.branch(...options));

/** Git [commitDate](https://fakerjs.dev/api/git.html#commitDate) */
export const commitDate = (
  ...options: Parameters<typeof faker.git.commitDate>
) => createValueConfig(() => faker.git.commitDate(...options));

/** Git [commitEntry](https://fakerjs.dev/api/git.html#commitEntry) */
export const commitEntry = (
  ...options: Parameters<typeof faker.git.commitEntry>
) => createValueConfig(() => faker.git.commitEntry(...options));

/** Git [commitMessage](https://fakerjs.dev/api/git.html#commitMessage) */
export const commitMessage = (
  ...options: Parameters<typeof faker.git.commitMessage>
) => createValueConfig(() => faker.git.commitMessage(...options));

/** Git [commitSha](https://fakerjs.dev/api/git.html#commitSha) */
export const commitSha = (...options: Parameters<typeof faker.git.commitSha>) =>
  createValueConfig(() => faker.git.commitSha(...options));
