import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

export const bigInt = (...options: Parameters<typeof faker.number.bigInt>) =>
  createValueConfig(() => faker.number.bigInt(...options));

export const binary = (...options: Parameters<typeof faker.number.binary>) =>
  createValueConfig(() => faker.number.binary(...options));

export const float = (...options: Parameters<typeof faker.number.float>) =>
  createValueConfig(() => faker.number.float(...options));

export const hex = (...options: Parameters<typeof faker.number.hex>) =>
  createValueConfig(() => faker.number.hex(...options));

export const int = (...options: Parameters<typeof faker.number.int>) =>
  createValueConfig(() => faker.number.int(...options));

export const octal = (...options: Parameters<typeof faker.number.octal>) =>
  createValueConfig(() => faker.number.octal(...options));
