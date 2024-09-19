import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Music [album](https://fakerjs.dev/api/music.html#album) */
export const album = (...options: Parameters<typeof faker.music.album>) =>
  createValueConfig(() => faker.music.album(...options));

/** Music [artist](https://fakerjs.dev/api/music.html#artist) */
export const artist = (...options: Parameters<typeof faker.music.artist>) =>
  createValueConfig(() => faker.music.artist(...options));

/** Music [genre](https://fakerjs.dev/api/music.html#genre) */
export const genre = (...options: Parameters<typeof faker.music.genre>) =>
  createValueConfig(() => faker.music.genre(...options));

/** Music [songName](https://fakerjs.dev/api/music.html#songName) */
export const songName = (...options: Parameters<typeof faker.music.songName>) =>
  createValueConfig(() => faker.music.songName(...options));
