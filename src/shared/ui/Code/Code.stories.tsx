import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Code} from './Code'

const meta: Meta<typeof Code> = {
    title: 'shared/Code',
    component: Code,
    args: {
        text: 'import React from \'react\'\n' +
            'import {type Meta, type StoryObj} from \'@storybook/react\'\n' +
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
            '} as Meta<typeof Code>'
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
