import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Select} from './Select'

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        label: 'label',
        value: 'item2',
        options: [
            {value: 'item1', content: 'item1'},
            {value: 'item2', content: 'item2'},
            {value: 'item3', content: 'item3'}
        ]
    }
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
