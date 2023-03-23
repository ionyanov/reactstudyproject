import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import AddCommentCard from './AddCommentCard'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {addArticleCommentReducer} from '../model/slice/addCommentCardSlice'

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
