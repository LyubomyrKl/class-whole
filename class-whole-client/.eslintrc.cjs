module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "airbnb",
    "airbnb/hooks",
    "prettier",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./jsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "import/no-extraneous-dependencies": [
      "error",
      {"devDependencies": true}
    ],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", 'tsx', 'ts'] }],
    "import/prefer-default-export": "off", // There can be .js files that export generic stuff (like constants) and sometimes they can have only one export
    "react/function-component-definition": [
      "error",
      {
        // The copied components from the main app used arrow functions
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
  },
};