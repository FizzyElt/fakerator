import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Music [album](https://fakerjs.dev/api/music.html#album) */
export const album = makeValueConfigFn(faker.music.album);

/** Music [artist](https://fakerjs.dev/api/music.html#artist) */
export const artist = makeValueConfigFn(faker.music.artist);

/** Music [genre](https://fakerjs.dev/api/music.html#genre) */
export const genre = makeValueConfigFn(faker.music.genre);

/** Music [songName](https://fakerjs.dev/api/music.html#songName) */
export const songName = makeValueConfigFn(faker.music.songName);
