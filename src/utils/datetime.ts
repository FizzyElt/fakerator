import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Datetime [anytime](https://fakerjs.dev/api/date.html#anytime) */
export const anytime = makeValueConfigFn(faker.date.anytime);

/** Datetime [between](https://fakerjs.dev/api/date.html#between) */
export const between = makeValueConfigFn(faker.date.between);

/** Datetime [betweens](https://fakerjs.dev/api/date.html#betweens) */
export const betweens = makeValueConfigFn(faker.date.betweens);

/** Datetime [birthdate](https://fakerjs.dev/api/date.html#birthdate) */
export const birthdate = makeValueConfigFn(faker.date.birthdate);

/** Datetime [future](https://fakerjs.dev/api/date.html#future) */
export const future = makeValueConfigFn(faker.date.future);

/** Datetime [month](https://fakerjs.dev/api/date.html#month) */
export const month = makeValueConfigFn(faker.date.month);

/** Datetime [past](https://fakerjs.dev/api/date.html#past) */
export const past = makeValueConfigFn(faker.date.past);

/** Datetime [recent](https://fakerjs.dev/api/date.html#recent) */
export const recent = makeValueConfigFn(faker.date.recent);

/** Datetime [soon](https://fakerjs.dev/api/date.html#soon) */
export const soon = makeValueConfigFn(faker.date.soon);

/** Datetime [timeZone](https://fakerjs.dev/api/date.html#timeZone) */
export const timeZone = makeValueConfigFn(faker.date.timeZone);

/** Datetime [weekday](https://fakerjs.dev/api/date.html#weekday) */
export const weekday = makeValueConfigFn(faker.date.weekday);
