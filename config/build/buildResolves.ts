import {type ResolveOptions} from 'webpack'
import {type BuildOption} from './types/config'

export function BuildResolves (option: BuildOption): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [
            option.paths.src,
            option.paths.node_modules
        ],
        alias: {
            '@': option.paths.src
        }
    }
}
