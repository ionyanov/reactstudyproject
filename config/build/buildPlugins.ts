import HtmlWebpackPlugin from 'html-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import webpack from 'webpack'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import {type BuildOption} from './types/config'

const CopyPlugin = require('copy-webpack-plugin')

export function BuildPlugins (option: BuildOption): webpack.WebpackPluginInstance[] {
    const plugins = [
        new HtmlWebpackPlugin({
            title: option.isDev ? 'DEV PROJECT' : 'Study project',
            template: option.paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: `css/${option.fileMask}.css`,
            chunkFilename: `css/${option.fileMask}.css`
        }),
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(option.isDev),
            _API_URL_: JSON.stringify(option.apiURL),
            _PROJECT_: JSON.stringify(option.project)
        }),
        new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin({patterns: [{from: option.paths.locales, to: option.paths.buildLocales}]})
    ]
    if (option.isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({openAnalyzer: false})
        )
    }

    return plugins
}
