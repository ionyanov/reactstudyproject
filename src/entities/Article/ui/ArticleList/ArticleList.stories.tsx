import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {type Article, ArticleBlockType, ArticleType, ArticleView} from '../../model/types/article'
import {ArticleList} from './ArticleList'

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

const meta: Meta<typeof ArticleList> = {
    title: 'entities/Article/ArticleList',
    component: ArticleList,
    args: {
        articles: [data]
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const NormalList: Story = {
    args: {
        view: ArticleView.LIST
    }
}

export const DarkList: Story = {
    args: {
        view: ArticleView.LIST
    },
    decorators: [ThemeDecorator(Theme.DARK)]
}
