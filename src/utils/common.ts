import { createValueConfig } from "../create_config";

export const constant = <T>(value: T) => createValueConfig(() => value);
