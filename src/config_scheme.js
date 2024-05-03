import { z } from "zod";

export const valueConfigScheme = z.object({
  type: z.string().regex(/^value$/, { message: "invalid type string" }),
  generateFn: z.function(),
});

export const selectionConfigScheme = z.object({
  type: z.string().regex(/^select$/, { message: "invalid type string" }),
  items: z.array().min(1, { message: "items can not be empty" }),
});

export const arrayConfigScheme = z.object({
  type: z.string().regex(/^arr$/, { message: "invalid type string" }),
  item: z.object(),
  len: z.number().min(0),
});

export const tupleConfigScheme = z.object({
  type: z.string().regex(/^arr$/, { message: "invalid type string" }),
  configItems: z.array().min(0),
});

export const objConfigScheme = z.object({
  type: z.string().regex(/^obj$/, { message: "invalid type string" }),
  content: z.object(),
});
