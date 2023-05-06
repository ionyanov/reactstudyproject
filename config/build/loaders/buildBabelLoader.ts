import {type RuleSetRule} from 'webpack'
import babelRemovePropsPlugin from '../../babel/babelRemovePropsPlugin'

interface BuildBabelLoaderProps {
    isDev: boolean
    isTsx: boolean
}

export function buildBabelLoader (props: BuildBabelLoaderProps): RuleSetRule {
    return {
        test: props.isTsx ? /\.(jsx|tsx)$/ : /\.(js|ts)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                cacheDirectory: true,
                presets: [
                    ['@babel/preset-env', {targets: 'defaults'}]
                ],
                plugins: [
                    /* ['i18next-extract', {
                        nsSeparator: '~',
                        locales: ['ru', 'en'],
                        keyAsDefaultValue: true
                    }], */
                    ['@babel/plugin-transform-typescript', {
                        isTSX: props.isTsx
                    }],
                    '@babel/plugin-transform-runtime',
                    props.isTsx && !props.isDev && [
                        babelRemovePropsPlugin,
                        {
                            props: ['data-testid']
                        }
                    ]
                    // props.isDev && require.resolve('react-refresh/babel')
                ].filter(Boolean)
            }
        }
    }
}
