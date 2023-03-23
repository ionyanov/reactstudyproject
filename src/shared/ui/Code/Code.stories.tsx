import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Code} from './Code'

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        text: 'import React from \'react\'\n' +
            'import {type ComponentMeta, type ComponentStory} from \'@storybook/react\'\n' +
            '\n' +
            'import {ThemeDecorator} from \'shared/config/storybook/ThemeDecorator\'\n' +
            'import {Theme} from \'app/providers/ThemeProvider\'\n' +
            'import {Code} from \'./Code\'\n' +
            '\n' +
            'export default {\n' +
            '    title: \'shared/Code\',\n' +
            '    component: Code,\n' +
            '    argTypes: {\n' +
            '        backgroundColor: {control: \'color\'}\n' +
            '    },\n' +
            '    args: {\n' +
            '        text: \n' +
            '    }\n' +
            '} as ComponentMeta<typeof Code>'
    }
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
