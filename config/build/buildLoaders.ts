import type webpack from 'webpack'
import {type BuildOption} from './types/config'
import {buildCSSLoaders} from './loaders/buildCSSLoaders'
import {svgLoader} from './loaders/svgLoader'

export function BuildLoaders (option: BuildOption): webpack.RuleSetRule[] {
    const svgLoaderItem: webpack.RuleSetRule = svgLoader()

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const scssLoader: webpack.RuleSetRule = buildCSSLoaders(option.isDev)

    const babelLoader: webpack.RuleSetRule = {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {targets: 'defaults'}]
                ],
                plugins: [
                    ['i18next-extract', {
                        nsSeparator: '~',
                        locales: ['ru-RU', 'en'],
                        keyAsDefaultValue: true
                    }]
                ]
            }
        }
    }

    return [
        fileLoader,
        babelLoader,
        tsLoader,
        scssLoader,
        svgLoaderItem
    ]
}
