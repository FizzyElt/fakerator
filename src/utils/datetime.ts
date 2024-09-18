import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Datetime [anytime](https://fakerjs.dev/api/date.html#anytime) */
export const anytime = (...options: Parameters<typeof faker.date.anytime>) =>
  createValueConfig(() => faker.date.anytime(...options));

/** Datetime [between](https://fakerjs.dev/api/date.html#between) */
export const between = (...options: Parameters<typeof faker.date.between>) =>
  createValueConfig(() => faker.date.between(...options));

/** Datetime [betweens](https://fakerjs.dev/api/date.html#betweens) */
export const betweens = (...options: Parameters<typeof faker.date.betweens>) =>
  createValueConfig(() => faker.date.betweens(...options));

/** Datetime [birthdate](https://fakerjs.dev/api/date.html#birthdate) */
export const birthdate = (
  ...options: Parameters<typeof faker.date.birthdate>
) => createValueConfig(() => faker.date.birthdate(...options));

/** Datetime [future](https://fakerjs.dev/api/date.html#future) */
export const future = (...options: Parameters<typeof faker.date.future>) =>
  createValueConfig(() => faker.date.future(...options));

/** Datetime [month](https://fakerjs.dev/api/date.html#month) */
export const month = (...options: Parameters<typeof faker.date.month>) =>
  createValueConfig(() => faker.date.month(...options));

/** Datetime [past](https://fakerjs.dev/api/date.html#past) */
export const past = (...options: Parameters<typeof faker.date.past>) =>
  createValueConfig(() => faker.date.past(...options));

/** Datetime [recent](https://fakerjs.dev/api/date.html#recent) */
export const recent = (...options: Parameters<typeof faker.date.recent>) =>
  createValueConfig(() => faker.date.recent(...options));

/** Datetime [soon](https://fakerjs.dev/api/date.html#soon) */
export const soon = (...options: Parameters<typeof faker.date.soon>) =>
  createValueConfig(() => faker.date.soon(...options));

/** Datetime [timeZone](https://fakerjs.dev/api/date.html#timeZone) */
export const timeZone = (...options: Parameters<typeof faker.date.timeZone>) =>
  createValueConfig(() => faker.date.timeZone(...options));

/** Datetime [weekday](https://fakerjs.dev/api/date.html#weekday) */
export const weekday = (...options: Parameters<typeof faker.date.weekday>) =>
  createValueConfig(() => faker.date.weekday(...options));
