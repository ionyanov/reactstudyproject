import path from 'path';

export default {
    clearMocks: true,
    modulePaths: ['<rootDir>src'],
    coveragePathIgnorePatterns: ['\\\\node_modules\\\\'],
    moduleDirectories: ['node_modules'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            path.resolve(__dirname, 'fileMock.js'),
        '\\.(scss)$': 'identity-obj-proxy',
        '^@/(.*)$': '<rootDir>src/$1',
    },
    // An array of file extensions your modules use
    moduleFileExtensions: [
        'js',
        'mjs',
        'cjs',
        'jsx',
        'ts',
        'tsx',
        'json',
        'node',
    ],
    setupFilesAfterEnv: ['<rootDir>config/jest/jest-setup.ts'],
    rootDir: '../../',
    testMatch: ['<rootDir>src/**/*.(*)@(spec|test).[tj]s?(x)'],
    testEnvironment: 'jsdom',
    globals: {
        _IS_DEV_: false,
        _API_URL_: '',
        _PROJECT_: 'jest',
    },
    reporters: [
        'default',
        [
            'jest-html-reporters',
            {
                publicPath: '<rootDir>/reports',
                filename: 'unit.html',
                // 'openReport': true,
                pageTitle: 'Test Report',
                inlineSource: true,
            },
        ],
    ],
};
