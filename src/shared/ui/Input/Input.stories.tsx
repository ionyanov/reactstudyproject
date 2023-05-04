import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {Input} from './Input'

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    args: {
        value: 'Content'
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const WithTitle: Story = {args: {placeholder: 'title'}}

export const LightGrow: Story = {args: {placeholder: 'title', placeholdersize: '100px'}}
