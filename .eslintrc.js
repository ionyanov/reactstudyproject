module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript'
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.json']
    },
    plugins: [
        'react'
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
            }]
    },
    globals: {
        _IS_DEV_: true
    }
}
