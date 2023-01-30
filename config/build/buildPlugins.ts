import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOption} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function BuildPlugins(option: BuildOption):webpack.WebpackPluginInstance[]{
    return [
        new HtmlWebpackPlugin({
            title: option.isDev?'DEV PROJECT':'Study project',
            template: option.paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: `css/${option.fileMask}.css`,
            chunkFilename: `css/${option.fileMask}.css`,
        }),
    ];
};