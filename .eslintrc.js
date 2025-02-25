module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["import", "react", "@typescript-eslint"],
  parserOptions: {
    project: ["./tsconfig.json"],
  },
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "prettier",
  ],
  settings: {
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".ts", ".tsx"],
      },
    },
  },
  ignorePatterns: [".eslintrc.js", "webpack.config.js"],
  rules: {},
};
