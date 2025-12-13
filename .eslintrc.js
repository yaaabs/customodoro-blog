/* global module, __dirname */

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    project: ["./tsconfig.json"],
    tsconfigRootDir: __dirname,
    ecmaFeatures: { jsx: true },
  },
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  plugins: ["@typescript-eslint", "react", "react-hooks"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals"
  ],
  settings: {
    react: { version: "detect" },
  },
  // ensure generated build files are ignored by ESLint
  ignorePatterns: [".next", ".next/**", "node_modules", "node_modules/**", "public", "public/**", "out", "out/**", "dist", "dist/**"],
  rules: {
    // allow require in config files
    "@typescript-eslint/no-require-imports": "off",
    // relax some strict rules for this project
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-unused-vars": ["warn", { "argsIgnorePattern": "^_", "varsIgnorePattern": "^_" }],
    // allow console in tooling
    "no-console": ["warn", { allow: ["warn", "error", "info"] }],
    // prefer automatic JSX runtime
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    // TypeScript handles undefined globals and types — disable JS `no-undef`
    "no-undef": "off",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        // TS files should use TS rules
      }
    },
    {
      files: ["*.config.js", "*.config.ts", "tailwind.config.ts"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off",
      }
    }
  ]
}
