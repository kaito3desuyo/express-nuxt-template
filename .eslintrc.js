module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    extends: [
        "eslint:recommended",
        "plugin:vue/recommended",
        "plugin:prettier/recommended"
    ],
    plugins: [
        'vue'
    ],
    rules: {
        "semi": [2, "never"],
        'indent': ['error', 4],
        "no-console": "off",
        "vue/max-attributes-per-line": "off",
        "prettier/prettier": ["error", { 
            "semi": false,
            "tabWidth": 4
        }]
    }
}