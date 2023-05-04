import {type Meta, type StoryObj} from '@storybook/react'
import {type Article, ArticleType} from '@/entities/Article'
import {ArticleBlockType} from '@/entities/Article/model/types/article'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {ArticleRecommendation} from './ArticleRecommendation'

const article: Article = {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    img: '',
    views: 0,
    user: {id: '1', username: 'username'},
    createdAt: 'createdAt',
    type: [ArticleType.ECONOMICS],
    blocks: [
        {
            id: '1',
            type: ArticleBlockType.TEXT,
            title: 'title',
            paragraphs: ['paragraphs']
        }
    ]
}

const meta: Meta<typeof ArticleRecommendation> = {
    title: 'features/Article/ArticleRecommendation',
    component: ArticleRecommendation,
    decorators: [StoreDecorator({})],
    parameters: {
        mockData: [{
            url: `${_API_URL_}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [{...article, id: 1}, {...article, id: 2}, {...article, id: 3}]
        }]
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
