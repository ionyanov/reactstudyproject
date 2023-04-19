import {type Meta, type StoryObj} from '@storybook/react'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Sidebar} from './Sidebar'

const meta: Meta<typeof Sidebar> = {
    title: 'widgets/Sidebar/Sidebar',
    component: Sidebar,
    decorators: [StoreDecorator({})]
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
export const IsAuth: Story = {
    decorators: [StoreDecorator({user: {authData: {}}})]
}
