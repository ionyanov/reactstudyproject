import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Select} from './Select'

const meta: Meta<typeof Select> = {
    title: 'shared/Select',
    component: Select,
    args: {
        label: 'label',
        value: 'item2',
        options: [
            {value: 'item1', content: 'item1'},
            {value: 'item2', content: 'item2'},
            {value: 'item3', content: 'item3'}
        ]
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const ReadOnly: Story = {
    args: {readonly: true}
}
