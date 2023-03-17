/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  "extends": [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    './.eslintrc-auto-import.json'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'eqeqeq': 1, // 使用===,!==
     // 空行规则
     'no-multiple-empty-lines': [1, {
      max: 1, // 连续最大空行数
      maxEOF: 0 // 文件末尾空行数
    }],

  }
}
