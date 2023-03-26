import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {articleCommentListReducer} from '../model/slices/articleCommentListSlice'
import ArticleCommentList from './ArticleCommentList'

export default {
    title: 'features/Comment/ArticleCommentList',
    component: ArticleCommentList,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof ArticleCommentList>

const Template: ComponentStory<typeof ArticleCommentList> = (args) => <ArticleCommentList {...args} />

const articleCommentList = {
    entities: {
        1: {id: '1', text: 'test1', user: {id: '1', username: 'username'}},
        2: {id: '2', text: 'test2', user: {id: '1', username: 'username'}},
        3: {id: '3', text: 'test2', user: {id: '1', username: 'username'}}

    },
    ids: ['1', '2', '3']
}

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({articleCommentList},
    {articleCommentList: articleCommentListReducer})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({articleCommentList},
        {articleCommentList: articleCommentListReducer})]

export const Loading = Template.bind({})
Loading.decorators = [StoreDecorator({articleCommentList: {isLoading: true, entities: {}, ids: []}},
    {articleCommentList: articleCommentListReducer})]

export const Empty = Template.bind({})
Empty.decorators = [StoreDecorator({articleCommentList: {entities: {}, ids: []}},
    {articleCommentList: articleCommentListReducer})]
