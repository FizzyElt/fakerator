import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Image [avatar](https://fakerjs.dev/api/image.html#avatar) */
export const avatar = (...options: Parameters<typeof faker.image.avatar>) =>
  createValueConfig(() => faker.image.avatar(...options));

/** Image [avatarGitHub](https://fakerjs.dev/api/image.html#avatarGitHub) */
export const avatarGitHub = (
  ...options: Parameters<typeof faker.image.avatarGitHub>
) => createValueConfig(() => faker.image.avatarGitHub(...options));

/** Image [avatarLegacy](https://fakerjs.dev/api/image.html#avatarLegacy) */
export const avatarLegacy = (
  ...options: Parameters<typeof faker.image.avatarLegacy>
) => createValueConfig(() => faker.image.avatarLegacy(...options));

/** Image [dataUri](https://fakerjs.dev/api/image.html#dataUri) */
export const dataUri = (...options: Parameters<typeof faker.image.dataUri>) =>
  createValueConfig(() => faker.image.dataUri(...options));

/** Image [url](https://fakerjs.dev/api/image.html#url) */
export const url = (...options: Parameters<typeof faker.image.url>) =>
  createValueConfig(() => faker.image.url(...options));

/** Image [urlLoremFlickr](https://fakerjs.dev/api/image.html#urlLoremFlickr) */
export const urlLoremFlickr = (
  ...options: Parameters<typeof faker.image.urlLoremFlickr>
) => createValueConfig(() => faker.image.urlLoremFlickr(...options));

/** Image [urlPicsumPhotos](https://fakerjs.dev/api/image.html#urlPicsumPhotos) */
export const urlPicsumPhotos = (
  ...options: Parameters<typeof faker.image.urlPicsumPhotos>
) => createValueConfig(() => faker.image.urlPicsumPhotos(...options));

/** Image [urlPlaceholder](https://fakerjs.dev/api/image.html#urlPlaceholder) */
export const urlPlaceholder = (
  ...options: Parameters<typeof faker.image.urlPlaceholder>
) => createValueConfig(() => faker.image.urlPlaceholder(...options));
