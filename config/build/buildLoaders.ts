import type webpack from 'webpack'
import {type BuildOption} from './types/config'
import {buildCSSLoaders} from './loaders/buildCSSLoaders'
import {buildSVGLoader} from './loaders/buildSVGLoader'
import {buildBabelLoader} from './loaders/buildBabelLoader'

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

    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
    }

    const scssLoader: webpack.RuleSetRule = buildCSSLoaders(option.isDev)

    const babelLoader: webpack.RuleSetRule = buildBabelLoader()

    return [
        fileLoader,
        babelLoader,
        tsLoader,
        scssLoader,
        svgLoaderItem
    ]
}
