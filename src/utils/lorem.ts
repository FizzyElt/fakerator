import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

export const lines = (...options: Parameters<typeof faker.lorem.lines>) =>
  createValueConfig(() => faker.lorem.lines(...options));

export const paragraph = (
  ...options: Parameters<typeof faker.lorem.paragraph>
) => createValueConfig(() => faker.lorem.paragraph(...options));

export const paragraphs = (
  ...options: Parameters<typeof faker.lorem.paragraphs>
) => createValueConfig(() => faker.lorem.paragraphs(...options));

export const sentence = (...options: Parameters<typeof faker.lorem.sentence>) =>
  createValueConfig(() => faker.lorem.sentence(...options));

export const sentences = (
  ...options: Parameters<typeof faker.lorem.sentences>
) => createValueConfig(() => faker.lorem.sentences(...options));

export const slug = (...options: Parameters<typeof faker.lorem.slug>) =>
  createValueConfig(() => faker.lorem.slug(...options));

export const text = (...options: Parameters<typeof faker.lorem.text>) =>
  createValueConfig(() => faker.lorem.text(...options));

export const word = (...options: Parameters<typeof faker.lorem.word>) =>
  createValueConfig(() => faker.lorem.word(...options));

export const words = (...options: Parameters<typeof faker.lorem.words>) =>
  createValueConfig(() => faker.lorem.words(...options));
