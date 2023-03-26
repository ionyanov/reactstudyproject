import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {type LoginSchema} from 'features/AuthByUserName'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import LoginForm from './LoginForm'

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({loginForm: {username: 'login', password: 'password'} as LoginSchema})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({loginForm: {username: 'login', password: 'password'} as LoginSchema})]

export const Error = Template.bind({})
Error.decorators = [StoreDecorator({
    loginForm: {
        username: 'login',
        password: 'password',
        error: 'error'
    } as LoginSchema
})]

export const IsLoading = Template.bind({})
IsLoading.decorators = [StoreDecorator({
    loginForm: {
        username: 'login',
        password: 'password',
        isLoading: true
    } as LoginSchema
})]
