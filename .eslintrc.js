module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        project: './tsconfig.json'
    },
    plugins: [
        '@typescript-eslint',
    ],
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/src/configs/README.md
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    rules: {
        'indent': 'off',
        '@typescript-eslint/indent': ['error', 4, {
            'SwitchCase': 1,
            'offsetTernaryExpressions': false,
        }],
        'quotes': 'off',
        '@typescript-eslint/quotes': ['error', 'backtick'],
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/require-await": 1,
        'block-spacing': 'error',
        'comma-dangle': ['error', 'always-multiline'],
        'comma-spacing': 'error',
        'eol-last': 'error',
        'keyword-spacing': 'error',
        'max-len': ['error', 140, 2, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: false,
            ignoreTemplateLiterals: false,
        }],
        'no-multiple-empty-lines': ['error', { 'max': 1, 'maxBOF': 0, 'maxEOF': 0 }],
        'no-bitwise': 'error',
        'no-param-reassign': 'off',
        'no-prototype-builtins': 'off',
        'no-trailing-spaces': 'error',
        'object-curly-spacing': ['error', 'always'],
        'space-before-blocks': 'error',
        'space-infix-ops': 'error',

        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': ['error', { 'checksVoidReturn': false }],
        '@typescript-eslint/no-this-alias': ['error', {
            'allowedNames': ['self'],
        }],
        '@typescript-eslint/no-unsafe-member-access': 'off',
        '@typescript-eslint/restrict-template-expressions': ['error', {
            allowAny: true,
            allowNullish: true,
        }],
    },
};
