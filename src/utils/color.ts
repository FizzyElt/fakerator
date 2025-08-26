import { faker } from "@faker-js/faker";
import { makeValueConfigFn } from "./utils";

/** Color [cmyk](https://fakerjs.dev/api/color.html#cmyk) */
export const cmyk = makeValueConfigFn(faker.color.cmyk);

/** Color [colorByCSSColorSpace](https://fakerjs.dev/api/color.html#colorByCSSColorSpace) */
export const colorByCSSColorSpace = makeValueConfigFn(
    faker.color.colorByCSSColorSpace,
);

/** Color [cssSupportedFunction](https://fakerjs.dev/api/color.html#cssSupportedFunction) */
export const cssSupportedFunction = makeValueConfigFn(
    faker.color.cssSupportedFunction,
);

/** Color [cssSupportedSpace](https://fakerjs.dev/api/color.html#cssSupportedSpace) */
export const cssSupportedSpace = makeValueConfigFn(
    faker.color.cssSupportedSpace,
);

/** Color [hsl](https://fakerjs.dev/api/color.html#hsl) */
export const hsl = makeValueConfigFn(faker.color.hsl);

/** Color [human](https://fakerjs.dev/api/color.html#human) */
export const human = makeValueConfigFn(faker.color.human);

/** Color [hwb](https://fakerjs.dev/api/color.html#hwb) */
export const hwb = makeValueConfigFn(faker.color.hwb);

/** Color [lab](https://fakerjs.dev/api/color.html#lab) */
export const lab = makeValueConfigFn(faker.color.lab);

/** Color [lch](https://fakerjs.dev/api/color.html#lch) */
export const lch = makeValueConfigFn(faker.color.lch);

/** Color [rgb](https://fakerjs.dev/api/color.html#rgb) */
export const rgb = makeValueConfigFn(faker.color.rgb);

/** Color [space](https://fakerjs.dev/api/color.html#space) */
export const space = makeValueConfigFn(faker.color.space);
