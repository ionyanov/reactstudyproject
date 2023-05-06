import {type Meta, type StoryObj} from '@storybook/react'
import {type Article, ArticleBlockType, articleDetailReducer, ArticleType} from '@/entities/Article'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import ArticleDetailsPage from './ArticleDetailsPage'

const data: Article = {
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
        },
        {
            id: '1',
            code: '        {\n' +
                '            id: "1",\n' +
                '            code: "",\n' +
                '            type: ArticleBlockType.CODE\n' +
                '        }',
            type: ArticleBlockType.CODE
        },
        {
            id: '1',
            title: 'title',
            src: '',
            type: ArticleBlockType.IMAGE
        }
    ]
}

const meta: Meta<typeof ArticleDetailsPage> = {
    title: 'pages/Article/ArticleDetailsPage',
    component: ArticleDetailsPage,
    decorators: [StoreDecorator({articleDetail: {data}}, {articleDetail: articleDetailReducer})]
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
