import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {CommentList} from './CommentList'

export default {
    title: 'entities/Comment/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        comments: [
            {
                id: '1',
                text: 'Test',
                user: {id: '1', username: 'username'}
            },
            {
                id: '2',
                text: 'Test2',
                user: {id: '1', username: 'username'}
            }
        ]
    }
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args}/>

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {isLoading: true}

export const Empty = Template.bind({})
Empty.args = {comments: []}
