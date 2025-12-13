/* eslint-disable global-require */
module.exports = [
  {
    // Exclude generated files from linting
    ignores: [
      ".next",
      ".next/**",
      "node_modules",
      "node_modules/**",
      "public",
      "public/**",
      "out",
      "out/**",
      "dist",
      "dist/**",
      ".eslintrc.js",
      ".eslintrc.cjs",
      "eslint.config.js",
      "eslint.config.cjs",
    ],
  },
  {
    // Main config (applies to JS/TS/JSX/TSX files)
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parser: require("@typescript-eslint/parser"),
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        project: ["./tsconfig.json"],
        tsconfigRootDir: __dirname,
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      "@typescript-eslint": require("@typescript-eslint/eslint-plugin"),
      react: require("eslint-plugin-react"),
      "react-hooks": require("eslint-plugin-react-hooks"),
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/explicit-module-boundary-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      "no-console": ["warn", { allow: ["warn", "error", "info"] }],
      "react/jsx-uses-react": "off",
      "react/react-in-jsx-scope": "off",
      "no-undef": "off",
    },
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
  },
]
