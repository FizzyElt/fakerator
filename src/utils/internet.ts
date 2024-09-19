import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Internet [color](https://fakerjs.dev/api/internet.html#color) */
export const color = (...options: Parameters<typeof faker.internet.color>) =>
  createValueConfig(() => faker.internet.color(...options));

/** Internet [displayName](https://fakerjs.dev/api/internet.html#displayName) */
export const displayName = (
  ...options: Parameters<typeof faker.internet.displayName>
) => createValueConfig(() => faker.internet.displayName(...options));

/** Internet [domainName](https://fakerjs.dev/api/internet.html#domainName) */
export const domainName = (
  ...options: Parameters<typeof faker.internet.domainName>
) => createValueConfig(() => faker.internet.domainName(...options));

/** Internet [domainSuffix](https://fakerjs.dev/api/internet.html#domainSuffix) */
export const domainSuffix = (
  ...options: Parameters<typeof faker.internet.domainSuffix>
) => createValueConfig(() => faker.internet.domainSuffix(...options));

/** Internet [domainWord](https://fakerjs.dev/api/internet.html#domainWord) */
export const domainWord = (
  ...options: Parameters<typeof faker.internet.domainWord>
) => createValueConfig(() => faker.internet.domainWord(...options));

/** Internet [email](https://fakerjs.dev/api/internet.html#email) */
export const email = (...options: Parameters<typeof faker.internet.email>) =>
  createValueConfig(() => faker.internet.email(...options));

/** Internet [emoji](https://fakerjs.dev/api/internet.html#emoji) */
export const emoji = (...options: Parameters<typeof faker.internet.emoji>) =>
  createValueConfig(() => faker.internet.emoji(...options));

/** Internet [exampleEmail](https://fakerjs.dev/api/internet.html#exampleEmail) */
export const exampleEmail = (
  ...options: Parameters<typeof faker.internet.exampleEmail>
) => createValueConfig(() => faker.internet.exampleEmail(...options));

/** Internet [httpMethod](https://fakerjs.dev/api/internet.html#httpMethod) */
export const httpMethod = (
  ...options: Parameters<typeof faker.internet.httpMethod>
) => createValueConfig(() => faker.internet.httpMethod(...options));

/** Internet [httpStatusCode](https://fakerjs.dev/api/internet.html#httpStatusCode) */
export const httpStatusCode = (
  ...options: Parameters<typeof faker.internet.httpStatusCode>
) => createValueConfig(() => faker.internet.httpStatusCode(...options));

/** Internet [ip](https://fakerjs.dev/api/internet.html#ip) */
export const ip = (...options: Parameters<typeof faker.internet.ip>) =>
  createValueConfig(() => faker.internet.ip(...options));

/** Internet [ipv4](https://fakerjs.dev/api/internet.html#ipv4) */
export const ipv4 = (...options: Parameters<typeof faker.internet.ipv4>) =>
  createValueConfig(() => faker.internet.ipv4(...options));

/** Internet [ipv6](https://fakerjs.dev/api/internet.html#ipv6) */
export const ipv6 = (...options: Parameters<typeof faker.internet.ipv6>) =>
  createValueConfig(() => faker.internet.ipv6(...options));

/** Internet [mac](https://fakerjs.dev/api/internet.html#mac) */
export const mac = (...options: Parameters<typeof faker.internet.mac>) =>
  createValueConfig(() => faker.internet.mac(...options));

/** Internet [password](https://fakerjs.dev/api/internet.html#password) */
export const password = (
  ...options: Parameters<typeof faker.internet.password>
) => createValueConfig(() => faker.internet.password(...options));

/** Internet [port](https://fakerjs.dev/api/internet.html#port) */
export const port = (...options: Parameters<typeof faker.internet.port>) =>
  createValueConfig(() => faker.internet.port(...options));

/** Internet [protocol](https://fakerjs.dev/api/internet.html#protocol) */
export const protocol = (
  ...options: Parameters<typeof faker.internet.protocol>
) => createValueConfig(() => faker.internet.protocol(...options));

/** Internet [url](https://fakerjs.dev/api/internet.html#url) */
export const url = (...options: Parameters<typeof faker.internet.url>) =>
  createValueConfig(() => faker.internet.url(...options));

/** Internet [userAgent](https://fakerjs.dev/api/internet.html#userAgent) */
export const userAgent = (
  ...options: Parameters<typeof faker.internet.userAgent>
) => createValueConfig(() => faker.internet.userAgent(...options));

/** Internet [userName](https://fakerjs.dev/api/internet.html#userName) */
export const userName = (
  ...options: Parameters<typeof faker.internet.userName>
) => createValueConfig(() => faker.internet.userName(...options));
