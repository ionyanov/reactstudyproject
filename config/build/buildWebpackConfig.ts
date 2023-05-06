import type webpack from 'webpack'
import {BuildDevServer} from './buildDevServer'
import {BuildLoaders} from './buildLoaders'
import {BuildPlugins} from './buildPlugins'
import {BuildResolves} from './buildResolves'
import {type BuildOption} from './types/config'

export function BuildWebpackConfig (option: BuildOption): webpack.Configuration {
    return {
        mode: option.mode,
        entry: option.paths.entry,
        module: {
            rules: BuildLoaders(option)
        },
        resolve: BuildResolves(option),
        plugins: BuildPlugins(option),
        output: {
            filename: `${option.fileMask}.js`,
            path: option.paths.build,
            clean: true,
            publicPath: '/'
        },
        devtool: option.isDev ? 'eval-cheap-module-source-map' : undefined,
        devServer: option.isDev ? BuildDevServer(option) : undefined
    }
}
