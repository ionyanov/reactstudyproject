import {type Meta, type StoryObj} from '@storybook/react'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import LoginForm from './LoginForm'

const meta: Meta<typeof LoginForm> = {
    title: 'features/LoginForm',
    component: LoginForm,
    decorators: [StoreDecorator({loginForm: {username: 'login', password: 'password'}})]
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Error: Story = {
    decorators: [StoreDecorator({loginForm: {error: 'error'}})]
}

export const IsLoading: Story = {
    decorators: [StoreDecorator({loginForm: {isLoading: true}})]
}
