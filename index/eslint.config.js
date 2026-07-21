import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    files: ["src/router.ts", "src/services/*.ts", "tests/unit/**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaVersion: 2018, sourceType: "module" },
      globals: { window: "readonly", localStorage: "readonly", console: "readonly", Storage: "readonly", AbortSignal: "readonly", AbortController: "readonly" }
    },
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/no-explicit-any": "error"
    }
  }
];
