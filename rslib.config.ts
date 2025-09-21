import { defineConfig } from "@rslib/core";

export default defineConfig({
    lib: [
        {
            format: "esm",
            syntax: "esnext",
            bundle: false,
            dts: true,
            outBase: "./src",
        },
        {
            format: "cjs",
            syntax: "esnext",
            bundle: false,
            dts: true,
            outBase: "./src",
        },
    ],
    source: {
        entry: {
            index: ["src/*.ts", "!src/*.test.ts"],
            utils: ["src/utils/*.ts"],
        },
        tsconfigPath: "./tsconfig.json",
    },
});
