import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import {BuildOption} from "./types/config";

export function BuildLoaders(option: BuildOption): webpack.RuleSetRule[] {

    const tsLoader: webpack.RuleSetRule = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    };

    const scssLoader: webpack.RuleSetRule = {
        test: /\.s[ac]ss$/i,
        use: [
            option.isDev?'style-loader':MiniCssExtractPlugin.loader,
            {
                loader: "css-loader",
                options: {
                    modules: {
                        auto: (resPath: string) => Boolean(resPath.includes('.module.')),
                        localIdentName: option.isDev ? "[path][name]__[local]" : "[hash:base64:5]",
                    },
                },
            },
            "sass-loader",
        ],

    }

    return [
        tsLoader,
        scssLoader,
    ];
}