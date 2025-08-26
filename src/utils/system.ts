import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** System [commonFileExt](https://fakerjs.dev/api/system.html#commonFileExt) */
export const commonFileExt = makeValueConfigFn(faker.system.commonFileExt);

/** System [commonFileName](https://fakerjs.dev/api/system.html#commonFileName) */
export const commonFileName = makeValueConfigFn(faker.system.commonFileName);

/** System [commonFileType](https://fakerjs.dev/api/system.html#commonFileType) */
export const commonFileType = makeValueConfigFn(faker.system.commonFileType);

/** System [cron](https://fakerjs.dev/api/system.html#cron) */
export const cron = makeValueConfigFn(faker.system.cron);

/** System [directoryPath](https://fakerjs.dev/api/system.html#directoryPath) */
export const directoryPath = makeValueConfigFn(faker.system.directoryPath);

/** System [fileExt](https://fakerjs.dev/api/system.html#fileExt) */
export const fileExt = makeValueConfigFn(faker.system.fileExt);

/** System [fileName](https://fakerjs.dev/api/system.html#fileName) */
export const fileName = makeValueConfigFn(faker.system.fileName);

/** System [filePath](https://fakerjs.dev/api/system.html#filePath) */
export const filePath = makeValueConfigFn(faker.system.filePath);

/** System [fileType](https://fakerjs.dev/api/system.html#fileType) */
export const fileType = makeValueConfigFn(faker.system.fileType);

/** System [mimeType](https://fakerjs.dev/api/system.html#mimeType) */
export const mimeType = makeValueConfigFn(faker.system.mimeType);

/** System [networkInterface](https://fakerjs.dev/api/system.html#networkInterface) */
export const networkInterface = makeValueConfigFn(
    faker.system.networkInterface,
);

/** System [semver](https://fakerjs.dev/api/system.html#semver) */
export const semver = makeValueConfigFn(faker.system.semver);
