/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  rules: {
    'no-unused-vars': 'true',
    '@typescript-eslint/no-unused-vars': ['error']
  },
  parserOptions: {
    ecmaVersion: 'latest'
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jquery: true
  }
}
