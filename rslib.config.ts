import { defineConfig } from "@rslib/core";
import * as path from "node:path";

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
    resolve: {
        alias: {
            "@": path.resolve(import.meta.dirname, "./src"),
        },
    },
    source: {
        entry: {
            index: ["src/*.ts", "!src/*.test.ts"],
            utils: ["src/utils/*.ts"],
        },
        tsconfigPath: "./tsconfig.json",
    },
});
