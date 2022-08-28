/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  "root": true,
  "extends": [
     "plugin:vue/vue3-essential", //뷰 스타일가이드
    "eslint:recommended",
    "@vue/eslint-config-prettier"
  ],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "no-console": "error",
    "prettier/prettier":[ "error", {

    }],
  },
}
