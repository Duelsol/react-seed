module.exports = {
  root: true,
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: [
    "react"
  ],
  rules: {
    "arrow-parens": "off",
    "comma-spacing": ["error", {"before": false, "after": true}],
    "eol-last": "error",
    "eqeqeq": "error",
    "generator-star-spacing": "off",
    "indent": ["error", 2, {"SwitchCase": 1}],
    "key-spacing": ["error", {"beforeColon": false, "afterColon": true}],
    "keyword-spacing": ["error", {"before": true, "after": true}],
    "no-console": "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-empty": "off",
    "no-irregular-whitespace": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-trailing-spaces": "error",
    "no-unused-vars": ["error", {"argsIgnorePattern": "_"}],
    "no-var": "error",
    "prefer-const": "error",
    "quotes": ["error", "single"],
    "react/prop-types": "off",
    "semi": ["error", "never"],
    "space-infix-ops": "error",
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {"named": "never"}]
  }
}
