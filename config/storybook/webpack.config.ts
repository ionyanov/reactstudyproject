import path from "path";
import webpack, {RuleSetRule} from "webpack";
import {svgLoader} from "../build/loaders/svgLoader";
import {buildCSSLoaders} from "../build/loaders/buildCSSLoaders";

export default ({config}: { config: webpack.Configuration }) => {
    config.resolve.modules = [
        ...(config.resolve.modules || []),
        path.resolve(__dirname, "..", "..", "src"),
    ];
    config.resolve.extensions = [
        ...(config.resolve.extensions || []),
        "ts", "tsx"
    ];

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        if (/svg/.test(rule.test.toString())) {
            return {...rule, exclude: /\.svg/i}
        }
        return rule;
    })
    config.module.rules.push(buildCSSLoaders(true))
    config.module.rules.push(svgLoader())

    return config;
}