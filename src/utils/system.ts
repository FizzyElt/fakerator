import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** System [commonFileExt](https://fakerjs.dev/api/system.html#commonFileExt) */
export const commonFileExt = (
  ...options: Parameters<typeof faker.system.commonFileExt>
) => createValueConfig(() => faker.system.commonFileExt(...options));

/** System [commonFileName](https://fakerjs.dev/api/system.html#commonFileName) */
export const commonFileName = (
  ...options: Parameters<typeof faker.system.commonFileName>
) => createValueConfig(() => faker.system.commonFileName(...options));

/** System [commonFileType](https://fakerjs.dev/api/system.html#commonFileType) */
export const commonFileType = (
  ...options: Parameters<typeof faker.system.commonFileType>
) => createValueConfig(() => faker.system.commonFileType(...options));

/** System [cron](https://fakerjs.dev/api/system.html#cron) */
export const cron = (...options: Parameters<typeof faker.system.cron>) =>
  createValueConfig(() => faker.system.cron(...options));

/** System [directoryPath](https://fakerjs.dev/api/system.html#directoryPath) */
export const directoryPath = (
  ...options: Parameters<typeof faker.system.directoryPath>
) => createValueConfig(() => faker.system.directoryPath(...options));

/** System [fileExt](https://fakerjs.dev/api/system.html#fileExt) */
export const fileExt = (...options: Parameters<typeof faker.system.fileExt>) =>
  createValueConfig(() => faker.system.fileExt(...options));

/** System [fileName](https://fakerjs.dev/api/system.html#fileName) */
export const fileName = (
  ...options: Parameters<typeof faker.system.fileName>
) => createValueConfig(() => faker.system.fileName(...options));

/** System [filePath](https://fakerjs.dev/api/system.html#filePath) */
export const filePath = (
  ...options: Parameters<typeof faker.system.filePath>
) => createValueConfig(() => faker.system.filePath(...options));

/** System [fileType](https://fakerjs.dev/api/system.html#fileType) */
export const fileType = (
  ...options: Parameters<typeof faker.system.fileType>
) => createValueConfig(() => faker.system.fileType(...options));

/** System [mimeType](https://fakerjs.dev/api/system.html#mimeType) */
export const mimeType = (
  ...options: Parameters<typeof faker.system.mimeType>
) => createValueConfig(() => faker.system.mimeType(...options));

/** System [networkInterface](https://fakerjs.dev/api/system.html#networkInterface) */
export const networkInterface = (
  ...options: Parameters<typeof faker.system.networkInterface>
) => createValueConfig(() => faker.system.networkInterface(...options));

/** System [semver](https://fakerjs.dev/api/system.html#semver) */
export const semver = (...options: Parameters<typeof faker.system.semver>) =>
  createValueConfig(() => faker.system.semver(...options));
