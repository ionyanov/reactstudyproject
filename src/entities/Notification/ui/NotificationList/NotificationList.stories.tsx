import {type Meta, type StoryObj} from '@storybook/react'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {NotificationList} from './NotificationList'

const meta: Meta<typeof NotificationList> = {
    title: 'entities/Notification/NotificationList',
    component: NotificationList,
    args: {

    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const IsLoading: Story = {
    decorators: [StoreDecorator({})]
}

export const DarkIsLoading: Story = {

}
