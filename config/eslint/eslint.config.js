module.exports = {
    settings: {
        react: {
            version: 'detect'
        }
    },
    env: {
        browser: true,
        es2021: true,
        jest: true
    },
    extends: [
        'plugin:react/recommended',
        'standard-with-typescript',
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:react-hooks/recommended"
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: '**/tsconfig.json'
    },
    parser: '@typescript-eslint/parser',
    root: true,
    plugins: [
        'react',
        'i18next',
        '@typescript-eslint',
        "react-hooks"
    ],
    rules: {
        indent: ['error', 4],
        '@typescript-eslint/indent': ['error', 4],
        'object-curly-spacing': [1, 'never'],
        '@typescript-eslint/object-curly-spacing': [1, 'never'],
        'react/react-in-jsx-scope': 'off',
        'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
        'no-tabs': ['error', {allowIndentationTabs: true}],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': 'warn',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-function-return-type': [1,
            {
                allowDirectConstAssertionInArrowFunctions: true
            }],
        'i18next/no-literal-string': [2, {
            markupOnly: true,
            ignoreAttribute: ['data-testid', 'to'],
        }],
        '@typescript-eslint/no-empty-function': [2, {allow: ['methods']}],
        '@typescript-eslint/no-base-to-string': 'off',
        '@typescript-eslint/consistent-type-assertions': 'off',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'error',
        'no-param-reassign': 'off'
    },
    globals: {
        _IS_DEV_: true
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {'i18next/no-literal-string': "off"}
        },
        {
            files: ['**/src/**/*.stories.{ts,tsx}'],
            rules: {'max-len': "off"}
        }
    ]
}
