import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {ArticleViewSelector} from './ArticleViewSelector'

export default {
    title: 'pages/ArticleViewSelector',
    component: ArticleViewSelector,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof ArticleViewSelector>

const Template: ComponentStory<typeof ArticleViewSelector> = (args) => <ArticleViewSelector {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
