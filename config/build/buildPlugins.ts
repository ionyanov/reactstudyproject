import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {type BuildOption} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'

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
            _IS_DEV_: JSON.stringify(option.isDev)
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
    if (option.isDev) {
        plugins.push(
            new webpack.HotModuleReplacementPlugin(),
            new BundleAnalyzerPlugin({openAnalyzer: false})
        )
    }

    return plugins
}
