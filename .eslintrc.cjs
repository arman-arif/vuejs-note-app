/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
    root: true,
    extends: [
        "plugin:vue/vue3-essential",
        "eslint:recommended",
        "@vue/eslint-config-prettier",
    ],
    env: {
        "vue/setup-compiler-macros": true,
        "vue/multiword-property-casing": true,
        "vue/mulit-word-property-name": false
    },
    rules: {
        // override/add rules settings here, such as:
        'vue/no-unused-vars': 'error'
    }
};