import { createValueConfig } from "../create_config";

/** Common constant */
export const constant = <T>(value: T) => createValueConfig(() => value);
