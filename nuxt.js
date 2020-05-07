module.exports = {
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  extends: [
    "@nuxtjs/eslint-config-typescript"
  ],
  // add your custom rules here
  rules: {
    // Prevent console from being used in production
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // Enforce use of comma
    // https://eslint.org/docs/rules/comma-dangle#always-multiline
    "comma-dangle": ["error", "always-multiline"],

    // https://eslint.org/docs/rules/object-curly-newline#consistent
    "object-curly-newline": ["error", { "consistent": true }],

    // https://eslint.org/docs/rules/curly#consistent
    "curly": ["error", "multi", "consistent"],

    // Enforce use of semicolons
    // https://eslint.org/docs/rules/semi#omitlastinonelineblock
    "semi": ["error", "always", { "omitLastInOneLineBlock": true }],

    // https://eslint.org/docs/rules/max-len
    "max-len": ["error", { code: 150 }],
    
    // Structure module imports
    "import/order": ["error", {
      "pathGroups": [
        {
          "pattern": "@/components/**",
          "group": "external",
          "position": "after"
        }
      ],
      "newlines-between": "always"
    }],

    // https://github.com/vuejs/eslint-plugin-vue/blob/master/docs/rules/no-v-html.md
    "vue/no-v-html": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
    "@typescript-eslint/explicit-function-return-type": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-ts-ignore": "off",

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    "@typescript-eslint/no-unused-vars": "warn"
  }
}
