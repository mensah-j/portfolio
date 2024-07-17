// @ts-check

import path from "path";
import { fileURLToPath } from "url";

import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import eslint from "@eslint/js";
import prettierConfig from "eslint-config-prettier";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default tseslint.config(
  {
    ignores: [
      ".next/**",
      "node_modules/**",
      "tailwind.config.ts",
      "src/env.mjs",
      "next.config.js",
      "next.config.mjs",
      "prettier.config.cjs",
      "postcss.config.mjs",
      "eslint.config.mjs",
    ],
  },
  eslint.configs.recommended,
  ...fixupConfigRules(compat.extends("next/core-web-vitals")),
  ...tseslint.configs.recommendedTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  prettierConfig,
  {
    plugins: {
      "@typescript-eslint": tseslint.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
);
