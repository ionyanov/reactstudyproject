import {type Meta, type StoryObj} from '@storybook/react'
import MainIcon from '@/shared/assets/icons/main-page.svg'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {SidebarItem} from './SidebarItem'

const meta: Meta<typeof SidebarItem> = {
    title: 'widgets/Sidebar/SidebarItem',
    component: SidebarItem,
    args: {
        item: {path: '', text: 'Text', Icon: MainIcon}
    },
    decorators: [StoreDecorator({})]
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
