import {type Meta, type StoryObj} from '@storybook/react'

import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {CommentList} from './CommentList'

const meta: Meta<typeof CommentList> = {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    args: {
        comments: [
            {
                id: '1',
                text: 'Test1',
                user: {id: '1', username: 'username'}
            },
            {
                id: '2',
                text: 'Test2',
                user: {id: '1', username: 'username'}
            }
        ]
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Loading: Story = {
    args: {
        isLoading: true
    }
}

export const Empty: Story = {
    args: {comments: []}
}
