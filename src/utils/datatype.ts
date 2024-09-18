import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Datatype [boolean](https://fakerjs.dev/api/datatype.html#boolean) */
export const boolean = (
  ...options: Parameters<typeof faker.datatype.boolean>
) => createValueConfig(() => faker.datatype.boolean(...options));
