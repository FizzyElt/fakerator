import type { ValueConfig } from "../type";
import { createValueConfig } from "../create_config";

export function makeValueConfigFn<Args extends Array<unknown>, R>(
  fn: (...options: Args) => R,
): (...options: Args) => ValueConfig<R> {
  return (...options) => createValueConfig(() => fn(...options));
}
