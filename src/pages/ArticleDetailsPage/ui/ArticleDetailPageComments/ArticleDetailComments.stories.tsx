import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {ArticleDetailComments} from './ArticleDetailComments'

const meta: Meta<typeof ArticleDetailComments> = {
    title: 'pages/Article/ArticleDetailComments',
    component: ArticleDetailComments
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
