import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Science [chemicalElement](https://fakerjs.dev/api/science.html#chemicalElement) */
export const chemicalElement = (
  ...options: Parameters<typeof faker.science.chemicalElement>
) => createValueConfig(() => faker.science.chemicalElement(...options));

/** Science [unit](https://fakerjs.dev/api/science.html#unit) */
export const unit = (...options: Parameters<typeof faker.science.unit>) =>
  createValueConfig(() => faker.science.unit(...options));
