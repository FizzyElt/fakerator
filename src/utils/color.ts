import { faker } from "@faker-js/faker";
import { createValueConfig } from "../create_config";

/** Color [cmyk](https://fakerjs.dev/api/color.html#cmyk) */
export const cmyk = (...options: Parameters<typeof faker.color.cmyk>) =>
  createValueConfig(() => faker.color.cmyk(...options));

/** Color [colorByCSSColorSpace](https://fakerjs.dev/api/color.html#colorByCSSColorSpace) */
export const colorByCSSColorSpace = (
  ...options: Parameters<typeof faker.color.colorByCSSColorSpace>
) => createValueConfig(() => faker.color.colorByCSSColorSpace(...options));

/** Color [cssSupportedFunction](https://fakerjs.dev/api/color.html#cssSupportedFunction) */
export const cssSupportedFunction = (
  ...options: Parameters<typeof faker.color.cssSupportedFunction>
) => createValueConfig(() => faker.color.cssSupportedFunction(...options));

/** Color [cssSupportedSpace](https://fakerjs.dev/api/color.html#cssSupportedSpace) */
export const cssSupportedSpace = (
  ...options: Parameters<typeof faker.color.cssSupportedSpace>
) => createValueConfig(() => faker.color.cssSupportedSpace(...options));

/** Color [hsl](https://fakerjs.dev/api/color.html#hsl) */
export const hsl = (...options: Parameters<typeof faker.color.hsl>) =>
  createValueConfig(() => faker.color.hsl(...options));

/** Color [human](https://fakerjs.dev/api/color.html#human) */
export const human = (...options: Parameters<typeof faker.color.human>) =>
  createValueConfig(() => faker.color.human(...options));

/** Color [hwb](https://fakerjs.dev/api/color.html#hwb) */
export const hwb = (...options: Parameters<typeof faker.color.hwb>) =>
  createValueConfig(() => faker.color.hwb(...options));

/** Color [lab](https://fakerjs.dev/api/color.html#lab) */
export const lab = (...options: Parameters<typeof faker.color.lab>) =>
  createValueConfig(() => faker.color.lab(...options));

/** Color [lch](https://fakerjs.dev/api/color.html#lch) */
export const lch = (...options: Parameters<typeof faker.color.lch>) =>
  createValueConfig(() => faker.color.lch(...options));

/** Color [rgb](https://fakerjs.dev/api/color.html#rgb) */
export const rgb = (...options: Parameters<typeof faker.color.rgb>) =>
  createValueConfig(() => faker.color.rgb(...options));

/** Color [space](https://fakerjs.dev/api/color.html#space) */
export const space = (...options: Parameters<typeof faker.color.space>) =>
  createValueConfig(() => faker.color.space(...options));
