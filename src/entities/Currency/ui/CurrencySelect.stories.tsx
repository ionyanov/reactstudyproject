import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {CurrencySelect} from './CurrencySelect'

const meta: Meta<typeof CurrencySelect> = {
    title: 'entities/Currency',
    component: CurrencySelect,
    args: {
        title: 'Валюта'
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
