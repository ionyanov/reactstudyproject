import path from 'path';
import type webpack from 'webpack';
import { DefinePlugin, type RuleSetRule } from 'webpack';
import { buildCSSLoaders } from '../build/loaders/buildCSSLoaders';
import { buildSVGLoader } from '../build/loaders/buildSVGLoader';

export default ({
    config,
}: {
    config: webpack.Configuration;
}): webpack.Configuration => {
    config.resolve!.modules = [
        ...(config.resolve!.modules || []),
        path.resolve(__dirname, '..', '..', 'src'),
        path.resolve(__dirname, '..', '..', 'src'),
    ];
    config.resolve!.extensions = [
        ...(config.resolve!.extensions || []),
        'ts',
        'tsx',
    ];
    config.resolve!.alias = {
        ...config.resolve!.alias,
        '@': path.resolve(__dirname, '..', '..', 'src'),
    };

    config.module!.rules = config.module!.rules?.map((rl) => {
        const rule: RuleSetRule = rl as RuleSetRule;
        if (rule.test?.toString().includes('svg')) {
            return { ...rule, exclude: /\.svg/i };
        }
        return rule;
    });
    config.module!.rules?.push(buildCSSLoaders(true));
    config.module!.rules?.push(buildSVGLoader());

    config.plugins!.push(
        new DefinePlugin({
            _IS_DEV_: JSON.stringify(true),
            _API_URL_: JSON.stringify('http://testapi.test'),
            _PROJECT_: JSON.stringify('storybook'),
        }),
    );

    return config;
};
