import {type RuleSetRule} from 'webpack'

export function svgLoader (): RuleSetRule {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
}
