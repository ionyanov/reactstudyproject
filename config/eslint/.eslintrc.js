module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    parser: '@typescript-eslint/parser',
    root: true,
    plugins: [
        'react',
        'i18next',
        '@typescript-eslint'
    ],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
        'no-tabs': ['error', {allowIndentationTabs: true}],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': 'warn',
        '@typescript-eslint/explicit-function-return-type': [1,
            {
                'allowDirectConstAssertionInArrowFunctions': true
            }],
        'i18next/no-literal-string': 1,
        '@typescript-eslint/no-empty-function': [2, {"allow": ["methods"]}]
    },
    globals: {
        _IS_DEV_: true
    }
}
