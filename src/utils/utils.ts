import { createValueConfig } from "../create_config";
import type { ValueConfig } from "../type";

export function makeValueConfigFn<Args extends Array<unknown>, R>(
  fn: (...options: Args) => R,
): (...options: Args) => ValueConfig<R> {
  return (...options) => createValueConfig(() => fn(...options));
}
