module.exports = {
  env: {
    browser: false,
    //es8: true
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
    "ecmaVersion": 2017
  },
  rules: {
    indent: ["error", 2, { "SwitchCase": 1 }],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    semi: ["error", "always"],
  }
};