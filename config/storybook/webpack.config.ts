import path from 'path'
import type webpack from 'webpack'
import {DefinePlugin, type RuleSetRule} from 'webpack'
import {svgLoader} from '../build/loaders/svgLoader'
import {buildCSSLoaders} from '../build/loaders/buildCSSLoaders'

export default ({config}: {config: webpack.Configuration}): webpack.Configuration => {
    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, '..', '..', 'src')
    ]
    config.resolve.extensions = [
        ...(config.resolve.extensions || []),
        'ts', 'tsx'
    ]

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (rule.test.toString().includes('svg')) {
            return {...rule, exclude: /\.svg/i}
        }
        return rule
    })
    config.module.rules.push(buildCSSLoaders(true))
    config.module.rules.push(svgLoader())

    config.plugins.push(new DefinePlugin({
        _IS_DEV_: true
    }))

    return config
}
