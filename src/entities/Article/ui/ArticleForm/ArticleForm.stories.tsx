import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {type Article} from 'entities/Article'
import {articleDetailReducer} from 'entities/Article/model/slice/articleDetailSlice'
import {ArticleBlockType, ArticleType} from 'entities/Article/model/types/article'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {ArticleForm} from './ArticleForm'

export default {
    title: 'entities/ArticleForm',
    component: ArticleForm,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof ArticleForm>
const Template: ComponentStory<typeof ArticleForm> = (args) => <ArticleForm {...args} />

const data: Article = {
    id: 'id',
    title: 'title',
    subtitle: 'subtitle',
    img: '',
    views: 0,
    user: {id: '1', username: 'username'},
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

export const Loading = Template.bind({})
Loading.decorators = [StoreDecorator({articleDetail: {isLoading: true}},
    {articleDetail: articleDetailReducer})]

export const Error = Template.bind({})
Error.decorators = [StoreDecorator({articleDetail: {error: 'error'}},
    {articleDetail: articleDetailReducer})]