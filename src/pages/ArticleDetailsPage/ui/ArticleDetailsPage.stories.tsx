import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import ArticleDetailsPage from './ArticleDetailsPage'
import {type Article} from 'entities/Article'
import {ArticleBlockType, ArticleType} from 'entities/Article/model/types/article'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {articleDetailReducer} from 'entities/Article/model/slice/articleDetailSlice'

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof ArticleDetailsPage>

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args} />

const data: Article = {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    img: '',
    views: 0,
    createdAt: 'createdAt',
    type: [ArticleType.ECONOMIC],
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
export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({articleDetail: {data}}, {articleDetail: articleDetailReducer})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({articleDetail: {data}}, {articleDetail: articleDetailReducer})]
