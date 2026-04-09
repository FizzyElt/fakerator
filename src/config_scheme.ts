import * as v from "valibot";

export const valueConfigScheme = v.object({
    type: v.pipe(v.string(), v.value("value", "invalid type string")),
    generateFn: v.any(),
});

export const selectionConfigScheme = v.object({
    type: v.pipe(v.string(), v.value("select", "invalid type string")),
    items: v.pipe(v.array(v.any()), v.nonEmpty("items can not be empty")),
});

export const arrayConfigScheme = v.object({
    type: v.pipe(v.string(), v.value("arr", "invalid type string")),
    item: v.object({}),
    len: v.pipe(v.number(), v.integer(), v.minValue(0)),
});

export const tupleConfigScheme = v.object({
    type: v.pipe(v.string(), v.value("tuple", "invalid type string")),
    configItems: v.array(v.any()),
});

export const objConfigScheme = v.object({
    type: v.pipe(v.string(), v.value("obj", "invalid type string")),
    content: v.object({}),
});

export const boundedSeriesScheme = v.pipe(
    v.object({
        type: v.pipe(v.string(), v.value("bounded_series", "invalid type string")),
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
