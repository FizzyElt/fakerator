import { createValueConfig } from "@/create_config";
import { ValueConfig } from "@/type";

/** Common constant */
export const constant = <T>(value: T): ValueConfig<T> => createValueConfig(() => value);
