import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

export const boolean = (
  ...options: Parameters<typeof faker.datatype.boolean>
) => createValueConfig(() => faker.datatype.boolean(...options));
