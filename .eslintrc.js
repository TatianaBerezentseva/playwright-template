module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },
  extends: ["airbnb-base", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "import", "jest", "prettier"],
  rules: {
    "linebreak-style": "off", // Неправильно работает в Windows.
    "no-console": "error",
    "no-alert": "error",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        ts: "never",
      },
    ],
    "prettier/prettier": ["error"],
  },
};
