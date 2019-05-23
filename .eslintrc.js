module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: 'airbnb',
  plugins: [
    'react'
  ],
  rules: {
    'arrow-parens': 'off',
    'comma-spacing': ['error', { 'before': false, 'after': true }],
    'eol-last': 'error',
    'eqeqeq': 'error',
    'generator-star-spacing': 'off',
    'import/no-unresolved': ['error', { ignore: ['^@/', '^src/', '^umi/'] }],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'linebreak-style': 'off',
    'no-empty': 'off',
    'no-irregular-whitespace': 'error',
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-trailing-spaces': 'error',
    'no-unused-vars': ['error', { 'argsIgnorePattern': '_' }],
    'no-var': 'error',
    'prefer-const': 'error',
    'quotes': ['error', 'single'],
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-one-expression-per-line': 'off',
    'react/prop-types': 'off',
    'semi': ['error', 'never'],
    'space-infix-ops': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': ['error', { 'named': 'never' }]
  }
}
