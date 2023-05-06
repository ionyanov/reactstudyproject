const {options} = require("axios");
module.exports = {
    stories: [
        "../../src/**/*.stories.@(js|jsx|ts|tsx)"
    ],
    addons: [
        '@storybook/addon-links',
        {
            name: '@storybook/addon-essentials',
            options: {background: false}
        },
        '@storybook/addon-interactions',
        'storybook-addon-mock'
    ],
    framework: {
        name: "@storybook/react-webpack5",
        options: {}
    }
};