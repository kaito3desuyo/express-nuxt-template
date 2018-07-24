module.exports = {
    root: true,
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        "parser": 'babel-eslint',
        "sourceType": "module"
    },
    extends: [
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:vue/recommended",
        "plugin:import/errors",
        "plugin:import/warnings"
    ],
    rules: {
        "semi": [2, "never"],
        'indent': ['error', 4, {"SwitchCase": 1}],
        "no-console": "off",
        "prettier/prettier": ["error", { 
            "semi": false,
            "tabWidth": 4
        }],
        "arrow-body-style": "error",
        "arrow-parens": "error",
        "arrow-spacing": "error",
        "generator-star-spacing": "error",
        "no-duplicate-imports": "error",
        "no-useless-computed-key": "error",
        "no-useless-constructor": "error",
        "no-useless-rename": "error",
        "no-var": "error",
        "object-shorthand": "error",
        "prefer-arrow-callback": "error",
        "prefer-const": "error",
        "prefer-rest-params": "error",
        "prefer-spread": "error",
        "prefer-template": "error",
        "rest-spread-spacing": "error",
        "template-curly-spacing": "error",
        "yield-star-spacing": "error",
        "vue/max-attributes-per-line": "off"
    }
}