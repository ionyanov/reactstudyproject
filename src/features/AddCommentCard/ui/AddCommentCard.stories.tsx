import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {addArticleCommentReducer} from '../model/slice/addCommentCardSlice'
import AddCommentCard from './AddCommentCard'

export default {
    title: 'features/Comment/AddCommentCard',
    component: AddCommentCard,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof AddCommentCard>

const Template: ComponentStory<typeof AddCommentCard> = (args) => <AddCommentCard {...args} />

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({addArticleComment: {text: 'test'}},
    {addArticleComment: addArticleCommentReducer})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({addArticleComment: {text: 'test'}}, {addArticleComment: addArticleCommentReducer})]
