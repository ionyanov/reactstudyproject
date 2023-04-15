import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'
// import withMock from 'storybook-addon-mock'

import {type Article, ArticleType} from 'entities/Article'
import {ArticleBlockType} from 'entities/Article/model/types/article'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
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

export default {
    title: 'features/Article/ArticleRecommendation',
    component: ArticleRecommendation,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    // decorators: [withMock],
    parameters: [
        {
            url: `${_API_URL_}/articles?_limit=3`,
            method: 'GET',
            status: 200,
            response: [{...article, id: 1}, {...article, id: 2}, {...article, id: 3}]

        }
    ]
} as ComponentMeta<typeof ArticleRecommendation>

const Template: ComponentStory<typeof ArticleRecommendation> = (args) => <ArticleRecommendation {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
