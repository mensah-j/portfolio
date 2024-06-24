import { fixupConfigRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";

import eslint from "@eslint/js";
import tsEslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

const compat = new FlatCompat();

export default tsEslint.config(
  eslint.configs.recommended,
  ...tsEslint.configs.strict,

  ...fixupConfigRules(compat.extends("next/core-web-vitals")),
  { ignores: [".next"] },

  eslintConfigPrettier,
);
