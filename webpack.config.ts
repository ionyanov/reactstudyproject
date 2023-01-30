import webpack from "webpack";
import {BuildWebpackConfig} from "./config/build/buildWebpackConfig";
import path from "path";
import {BuildParams} from "./config/build/types/config";

export default (env: BuildParams)=>{
    const mode = env.mode || 'development';

    const config: webpack.Configuration = BuildWebpackConfig({
        mode,
        paths:{
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            build: path.resolve(__dirname, 'dist'),
            src: path.resolve(__dirname, 'src'),
            node_modules: path.join(__dirname, 'node_modules'),
        },
        isDev: mode==='development',
        port: env.port || 3000,
        fileMask: '[name].[contenthash:5]',
    });

    return config;
};