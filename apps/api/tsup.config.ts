import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  outDir: "dist",

  bundle: true,
  splitting: false,
  clean: true,
  minify: true,
  sourcemap: false,

  noExternal: [/^@repo\//],

  loader: {
    ".json": "copy",
  },

  env: {
    IS_SERVER_BUILD: "true",
  },
});