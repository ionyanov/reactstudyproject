import {type Configuration as DevServerConfigurations} from 'webpack-dev-server'
import {type BuildOption} from './types/config'

export function BuildDevServer (option: BuildOption): DevServerConfigurations {
    return {
        port: option.port,
        open: true,
        historyApiFallback: true,
        hot: true
    }
}
