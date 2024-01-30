module.exports = {
    root: true,
    extends: [],
    rules: {
        'max-len': [1, { code: 1000 }],
    },
    globals: {
        IS_DEVELOPMENT: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    env: {
        es6: true,
    },
}
