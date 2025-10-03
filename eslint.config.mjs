// @ts-check

import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginReact from "eslint-plugin-react";
import eslintPluginReactHooks from "eslint-plugin-react-hooks";
import eslintPluginJsxA11y from "eslint-plugin-jsx-a11y";

export default defineConfig(
  eslint.configs.recommended,
  tseslint.configs.recommended,
  tseslint.configs.stylistic,
  {
    files: ["**/*.{ts,tsx}"],
    extends: [eslintPluginImport.flatConfigs.recommended, eslintPluginImport.flatConfigs.typescript],
    settings: {
      "import/resolver": {
        alias: {
          map: [["@", "./src"]],
          extensions: [".ts", ".tsx"],
        },
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    extends: [eslintPluginReact.configs.flat.recommended, eslintPluginReact.configs.flat["jsx-runtime"]],
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    plugins: {
      "react-hooks": eslintPluginReactHooks,
    },
    // XXX: Temporal workaround until https://github.com/facebook/react/pull/34700 is published.
    extends: ["react-hooks/flat/recommended"],
  },
  eslintPluginJsxA11y.flatConfigs.recommended,
  eslintConfigPrettier,
  {
    ignores: ["eslint.config.mjs"],
  },
);
