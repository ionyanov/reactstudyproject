import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator";
import {TransationDecorator} from "../../src/shared/config/storybook/TransationDecorator";
import {Theme} from "../../src/shared/lib/providers/ThemeProvider";
import {StoreDecorator} from "shared/config/storybook/StoreDecorator";

const preview = {
    parameters: {
        actions: { argTypesRegex: "^on[A-Z].*" },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
        options: {
            storySort: {
                order: ['shared', 'entities', 'features', 'widgets', 'pages', '*'],
            },
        },
    },
    decorators: [
        StyleDecorator,
        ThemeDecorator(Theme.LIGHT),
        TransationDecorator,
        RouterDecorator,
        StoreDecorator({}, {})
    ],
};

export default preview;