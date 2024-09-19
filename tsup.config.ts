import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/utils/*.ts"],
  splitting: true,
  format: ["cjs", "esm"],
  dts: true,
});
