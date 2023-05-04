import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {Text, TextSize, TextTheme} from './Text'

const meta: Meta<typeof Text> = {
    title: 'shared/Text',
    component: Text,
    args: {
        title: 'Title',
        text: 'Text'
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const OnlyTitle: Story = {args: {title: 'Title', text: undefined}}
export const OnlyText: Story = {args: {title: undefined, text: 'Text'}}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
export const OnlyTitleDark: Story = {args: {title: 'Title', text: undefined}, decorators: [ThemeDecorator(Theme.DARK)]}
export const OnlyTextDark: Story = {args: {title: undefined, text: 'Text'}, decorators: [ThemeDecorator(Theme.DARK)]}

export const Error: Story = {args: {theme: TextTheme.ERROR}}
export const ErrorDark: Story = {args: {theme: TextTheme.ERROR}, decorators: [ThemeDecorator(Theme.DARK)]}

export const SizeL: Story = {args: {size: TextSize.L}}
export const SizeLDark: Story = {args: {size: TextSize.L}, decorators: [ThemeDecorator(Theme.DARK)]}
