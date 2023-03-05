import {type RuleSetRule} from 'webpack'

export function buildBabelLoader (): RuleSetRule {
    return {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {targets: 'defaults'}]
                ],
                plugins: [
                    /* ['i18next-extract', {
                        nsSeparator: '~',
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true
                    }] */
                ]
            }
        }
    }
}
