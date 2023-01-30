import {BuildOption} from "./types/config";
import webpack from "webpack";
import {BuildLoaders} from "./buildLoaders";
import {BuildResolves} from "./buildResolves";
import {BuildPlugins} from "./buildPlugins";
import {BuildDevServer} from "./buildDevServer";

export function BuildWebpackConfig(option: BuildOption): webpack.Configuration {
    return {
        mode: option.mode,
        entry: option.paths.entry,
        module: {
            rules: BuildLoaders(option),
        },
        resolve: BuildResolves(option),
        plugins: BuildPlugins(option),
        output: {
            filename: `${option.fileMask}.js`,
            path: option.paths.build,
            clean: true,
        },
        devtool: option.isDev ? 'inline-source-map' : undefined,
        devServer: option.isDev ?  BuildDevServer(option) : undefined,
    };
}