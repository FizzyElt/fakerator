import * as v from "valibot";

// export const valueConfigScheme = z.object({
//     type: z.string().regex(/^value$/, { message: "invalid type string" }),
//     generateFn: z.any(),
// });

export const valueConfigScheme = v.object({
    type: v.pipe(v.string(), v.regex(/^value$/, "invalid type string")),
    generateFn: v.any(),
});

// export const selectionConfigScheme = z.object({
//     type: z.string().regex(/^select$/, { message: "invalid type string" }),
//     items: z.any().array().nonempty({ message: "items can not be empty" }),
// });

export const selectionConfigScheme = v.object({
    type: v.pipe(v.string(), v.regex(/^select$/, "invalid type string")),
    items: v.pipe(v.array(v.any()), v.nonEmpty("items can not be empty")),
});

// export const arrayConfigScheme = z.object({
//     type: z.string().regex(/^arr$/, { message: "invalid type string" }),
//     item: z.object({}),
//     len: z.number().nonnegative(),
// });

export const arrayConfigScheme = v.object({
    type: v.pipe(v.string(), v.regex(/^arr$/, "invalid type string")),
    item: v.object({}),
    len: v.pipe(v.number(), v.integer(), v.minValue(0)),
});

// export const tupleConfigScheme = z.object({
//     type: z.string().regex(/^tuple$/, { message: "invalid type string" }),
//     configItems: z.any().array(),
// });

export const tupleConfigScheme = v.object({
    type: v.pipe(v.string(), v.regex(/^tuple$/, "invalid type string")),
    configItems: v.array(v.any()),
});

// export const objConfigScheme = z.object({
//     type: z.string().regex(/^obj$/, { message: "invalid type string" }),
//     content: z.object({}),
// });

export const objConfigScheme = v.object({
    type: v.pipe(v.string(), v.regex(/^obj$/, "invalid type string")),
    content: v.object({}),
});

// export const boundedSeriesScheme = z
//     .object({
//         type: z.string().regex(/^bounded_series$/, { message: "invalid type string" }),
//         upperLimit: z.number().nonnegative(),
//         lowerLimit: z.number().nonnegative(),
//         createInitValue: z.any(),
//         count: z.number().nonnegative(),
//     })
//     .refine(({ upperLimit, lowerLimit }) => upperLimit >= lowerLimit, {
//         message: "lowerLimit can not greater then upperLimit",
//     });

export const boundedSeriesScheme = v.pipe(
    v.object({
        type: v.pipe(v.string(), v.regex(/^bounded_series$/, "invalid type string")),
        upperLimit: v.pipe(v.number(), v.minValue(0)),
        lowerLimit: v.pipe(v.number(), v.minValue(0)),
        createInitValue: v.any(),
        count: v.pipe(v.number(), v.integer(), v.minValue(0)),
    }),
    v.check(
        ({ upperLimit, lowerLimit }) => upperLimit >= lowerLimit,
        "lowerLimit can not greater then upperLimit",
    ),
);
