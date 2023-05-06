import {type Meta, type StoryObj} from '@storybook/react'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import ArticleRating from './ArticleRating'

const meta: Meta<typeof ArticleRating> = {
    title: 'features/Article/ArticleRating',
    component: ArticleRating,
    decorators: [StoreDecorator({})]
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
