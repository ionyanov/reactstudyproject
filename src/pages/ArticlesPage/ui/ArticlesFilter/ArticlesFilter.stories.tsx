import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {ArticlesFilter} from './ArticlesFilter'

export default {
    title: 'pages/Article/ArticlesFilter',
    component: ArticlesFilter,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof ArticlesFilter>

const Template: ComponentStory<typeof ArticlesFilter> = (args) => <ArticlesFilter {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
