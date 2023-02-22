import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {LoginForm} from './LoginForm'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
