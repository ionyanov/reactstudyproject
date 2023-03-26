import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Input} from './Input'

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        value: 'Content'
    }
} as ComponentMeta<typeof Input>

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />

export const Light = Template.bind({})

export const LightWithTitle = Template.bind({})
LightWithTitle.args = {placeholder: 'title'}

export const LightGrow = Template.bind({})
LightGrow.args = {placeholder: 'title', placeholdersize: '100px'}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
