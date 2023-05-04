import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {Tabs} from './Tabs'

const meta: Meta<typeof Tabs> = {
    title: 'shared/Tabs',
    component: Tabs,
    args: {
        tabs: [
            {component: 'Component1', value: 'Component1'},
            {component: 'Component2', value: 'Component2'},
            {component: 'Component3', value: 'Component3'}
        ],
        selectedTab: 'Component2'
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
