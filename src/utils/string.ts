import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

export const alpha = (...options: Parameters<typeof faker.string.alpha>) =>
  createValueConfig(() => faker.string.alpha(...options));

export const alphanumeric = (
  ...options: Parameters<typeof faker.string.alphanumeric>
) => createValueConfig(() => faker.string.alphanumeric(...options));

export const binary = (...options: Parameters<typeof faker.string.binary>) =>
  createValueConfig(() => faker.string.binary(...options));

export const fromCharacters = (
  ...options: Parameters<typeof faker.string.fromCharacters>
) => createValueConfig(() => faker.string.fromCharacters(...options));

export const hexadecimal = (
  ...options: Parameters<typeof faker.string.hexadecimal>
) => createValueConfig(() => faker.string.hexadecimal(...options));

export const nanoid = (...options: Parameters<typeof faker.string.nanoid>) =>
  createValueConfig(() => faker.string.nanoid(...options));

export const octal = (...options: Parameters<typeof faker.string.octal>) =>
  createValueConfig(() => faker.string.octal(...options));

export const sample = (...options: Parameters<typeof faker.string.sample>) =>
  createValueConfig(() => faker.string.sample(...options));

export const symbol = (...options: Parameters<typeof faker.string.symbol>) =>
  createValueConfig(() => faker.string.symbol(...options));

export const uuid = (...options: Parameters<typeof faker.string.uuid>) =>
  createValueConfig(() => faker.string.uuid(...options));
