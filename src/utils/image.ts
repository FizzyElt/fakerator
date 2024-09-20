import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Image [avatar](https://fakerjs.dev/api/image.html#avatar) */
export const avatar = makeValueConfigFn(faker.image.avatar);

/** Image [avatarGitHub](https://fakerjs.dev/api/image.html#avatarGitHub) */
export const avatarGitHub = makeValueConfigFn(faker.image.avatarGitHub);

/** Image [avatarLegacy](https://fakerjs.dev/api/image.html#avatarLegacy) */
export const avatarLegacy = makeValueConfigFn(faker.image.avatarLegacy);

/** Image [dataUri](https://fakerjs.dev/api/image.html#dataUri) */
export const dataUri = makeValueConfigFn(faker.image.dataUri);

/** Image [url](https://fakerjs.dev/api/image.html#url) */
export const url = makeValueConfigFn(faker.image.url);

/** Image [urlLoremFlickr](https://fakerjs.dev/api/image.html#urlLoremFlickr) */
export const urlLoremFlickr = makeValueConfigFn(faker.image.urlLoremFlickr);

/** Image [urlPicsumPhotos](https://fakerjs.dev/api/image.html#urlPicsumPhotos) */
export const urlPicsumPhotos = makeValueConfigFn(faker.image.urlPicsumPhotos);

/** Image [urlPlaceholder](https://fakerjs.dev/api/image.html#urlPlaceholder) */
export const urlPlaceholder = makeValueConfigFn(faker.image.urlPlaceholder);
