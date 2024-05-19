import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";

export default [
  {
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "error",
      "no-unused-expressions": "error",
      "prefer-const": "error",
      "no-undef": "error",
      "no-console": "warn",
    },
    ignores: ["**/node_modules/", ".dist/"],
    globals: {
      process: "readonly",
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];
