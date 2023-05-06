import {StyleDecorator} from "@/shared/config/storybook/StyleDecorator";
import {ThemeDecorator} from "@/shared/config/storybook/ThemeDecorator";
import {RouterDecorator} from "@/shared/config/storybook/RouterDecorator";
import {StoreDecorator} from "@/shared/config/storybook/StoreDecorator";
import {Theme} from "@/shared/lib/providers/ThemeProvider";
import {TransationDecorator} from "@/shared/config/storybook/TransationDecorator";

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
        layout: 'fullscreen'
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