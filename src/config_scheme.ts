import { z } from "zod";

export const valueConfigScheme = z.object({
  type: z.string().regex(/^value$/, { message: "invalid type string" }),
  generateFn: z.any(),
});

export const selectionConfigScheme = z.object({
  type: z.string().regex(/^select$/, { message: "invalid type string" }),
  items: z.any().array().nonempty({ message: "items can not be empty" }),
});

export const arrayConfigScheme = z.object({
  type: z.string().regex(/^arr$/, { message: "invalid type string" }),
  item: z.object({}),
  len: z.number().nonnegative(),
});

export const tupleConfigScheme = z.object({
  type: z.string().regex(/^tuple$/, { message: "invalid type string" }),
  configItems: z.any().array(),
});

export const objConfigScheme = z.object({
  type: z.string().regex(/^obj$/, { message: "invalid type string" }),
  content: z.object({}),
});

export const boundedSeriesScheme = z
  .object({
    type: z
      .string()
      .regex(/^bounded_series$/, { message: "invalid type string" }),
    upperLimit: z.number().nonnegative(),
    lowerLimit: z.number().nonnegative(),
    createInitValue: z.any(),
    count: z.number().nonnegative(),
  })
  .refine(({ upperLimit, lowerLimit }) => upperLimit >= lowerLimit, {
    message: "lowerLimit can not greater then upperLimit",
  });
