import { createObjectConfig, createValueConfig } from "./create_config";
import { createGeneratorByType } from "./create_generator_fn";

const a = createObjectConfig(
  {
    a: createValueConfig(() => 1),
    b: createValueConfig(() => 2),
  },
  ({ a }) => a + 100,
);
