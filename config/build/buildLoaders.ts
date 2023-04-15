import type webpack from 'webpack'
import {buildBabelLoader} from './loaders/buildBabelLoader'
import {buildCSSLoaders} from './loaders/buildCSSLoaders'
import {buildSVGLoader} from './loaders/buildSVGLoader'
import {type BuildOption} from './types/config'

export function BuildLoaders (option: BuildOption): webpack.RuleSetRule[] {
    const svgLoaderItem: webpack.RuleSetRule = buildSVGLoader()

    const fileLoader: webpack.RuleSetRule = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader'
            }
        ]
    }

    /* const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    } */

    const scssLoader: webpack.RuleSetRule = buildCSSLoaders(option.isDev)

    const babelLoader: webpack.RuleSetRule = buildBabelLoader({isDev: option.isDev, isTsx: false})
    const tsLoader: webpack.RuleSetRule = buildBabelLoader({isDev: option.isDev, isTsx: true})

    return [
        fileLoader,
        babelLoader,
        tsLoader,
        scssLoader,
        svgLoaderItem
    ]
}
