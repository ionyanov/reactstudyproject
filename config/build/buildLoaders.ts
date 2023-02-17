import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {type BuildOption} from './types/config'

export function BuildLoaders (option: BuildOption): webpack.RuleSetRule[] {
    const svgLoader: webpack.RuleSetRule = {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }

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

    const scssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            option.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: option.isDev ? '[path][name]__[local]' : '[hash:base64:5]'
                    }
                }
            },
            'sass-loader'
        ]
    }

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
        svgLoader
    ]
}
