import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {ArticleRecommendation} from './ArticleRecommendation'

export default {
    title: 'features/Article/ArticleRecommendation',
    component: ArticleRecommendation,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof ArticleRecommendation>

const Template: ComponentStory<typeof ArticleRecommendation> = (args) => <ArticleRecommendation {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
