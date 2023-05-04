import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {PageError} from './PageError'

const meta: Meta<typeof PageError> = {
    title: 'widgets/PageError',
    component: PageError
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
