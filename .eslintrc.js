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
  rules: {
    "arrow-body-style": "off",
    "import/prefer-default-export": "off",
    "max-len": [
      "error",
      {
        code: 120,
        tabWidth: 2,
        ignoreComments: true,
      },
    ],
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "@typescript-eslint/interface-name-prefix": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        multiline: {
          delimiter: "comma",
          requireLast: true,
        },
        singleline: {
          delimiter: "comma",
          requireLast: true,
        },
      },
    ],
  },
};
