import {addDecorator} from "@storybook/react";
import {StyleDecorator} from "../../src/shared/config/storybook/StyleDecorator";
import {ThemeDecorator} from "../../src/shared/config/storybook/ThemeDecorator";
import {RouterDecorator} from "../../src/shared/config/storybook/RouterDecorator";
import {TransationDecorator} from "../../src/shared/config/storybook/TransationDecorator";
import {Theme} from "../../src/shared/lib/providers/ThemeProvider";

export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(TransationDecorator)
addDecorator(RouterDecorator)