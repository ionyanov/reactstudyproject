import path from 'path'
import type webpack from 'webpack'
import {BuildWebpackConfig} from './config/build/buildWebpackConfig'
import {type BuildParams} from './config/build/types/config'

export default (env: BuildParams): webpack.Configuration => {
    const mode = env.mode || 'development'
    const apiURL = env.apiURL || 'http://localhost:8000/'

    return BuildWebpackConfig({
        mode,
        paths: {
            entry: path.resolve(__dirname, 'src', 'index.tsx'),
            html: path.resolve(__dirname, 'public', 'index.html'),
            build: path.resolve(__dirname, 'dist'),
            src: path.resolve(__dirname, 'src'),
            node_modules: path.join(__dirname, 'node_modules'),
            locales: path.resolve(__dirname, 'public', 'locales'),
            buildLocales: path.resolve(__dirname, 'dist', 'locales')
        },
        isDev: mode === 'development',
        apiURL,
        port: env.port || 3000,
        fileMask: '[name].[contenthash:5]',
        project: 'frontend'
    })
}
