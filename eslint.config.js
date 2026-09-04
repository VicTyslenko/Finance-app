// ESLint runs ONLY for import ordering — oxlint remains the main linter.
import importPlugin from "eslint-plugin-import";
import tseslint from "typescript-eslint";

export default tseslint.config({
  files: ["src/**/*.{ts,tsx}"],
  plugins: { import: importPlugin },
  languageOptions: { parser: tseslint.parser },
  rules: {
    "import/first": "error",
    "import/newline-after-import": "error",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
        pathGroups: [{ pattern: "react", group: "external", position: "before" }],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: { order: "asc", caseInsensitive: true },
      },
    ],
  },
});
