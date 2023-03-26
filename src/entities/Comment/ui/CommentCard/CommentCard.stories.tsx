import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {CommentCard} from './CommentCard'

export default {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        data:
            {
                id: '1',
                text: 'Test',
                user: {id: '1', username: 'username'}
            }
    }
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Loading = Template.bind({})
Loading.args = {isLoading: true}

export const Empty = Template.bind({})
Empty.args = {data: undefined}
