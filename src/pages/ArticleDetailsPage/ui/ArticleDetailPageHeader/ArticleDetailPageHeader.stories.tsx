import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {ArticleDetailPageHeader} from './ArticleDetailPageHeader'

const meta: Meta<typeof ArticleDetailPageHeader> = {
    title: 'pages/Article/ArticleDetailPageHeader',
    component: ArticleDetailPageHeader
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
