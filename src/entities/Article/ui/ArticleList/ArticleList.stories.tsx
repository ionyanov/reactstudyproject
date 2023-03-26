import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {ArticleList} from './ArticleList'

export default {
    title: 'pages/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
