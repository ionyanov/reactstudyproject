import {type Meta, type StoryObj} from '@storybook/react'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {articleCommentListReducer} from '../model/slices/articleCommentListSlice'
import ArticleCommentList from './ArticleCommentList'

const articleCommentList = {
    entities: {
        1: {id: '1', text: 'test1', user: {id: '1', username: 'username'}},
        2: {id: '2', text: 'test2', user: {id: '1', username: 'username'}},
        3: {id: '3', text: 'test2', user: {id: '1', username: 'username'}}

    },
    ids: ['1', '2', '3']
}

const meta: Meta<typeof ArticleCommentList> = {
    title: 'features/Comment/ArticleCommentList',
    component: ArticleCommentList,
    decorators: [StoreDecorator({articleCommentList}, {articleCommentList: articleCommentListReducer})]
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Loading: Story = {
    decorators: [StoreDecorator({articleCommentList: {isLoading: true, entities: {}, ids: []}},
        {articleCommentList: articleCommentListReducer})]
}

export const Empty: Story = {
    decorators: [StoreDecorator({articleCommentList: {entities: {}, ids: []}},
        {articleCommentList: articleCommentListReducer})]
}
