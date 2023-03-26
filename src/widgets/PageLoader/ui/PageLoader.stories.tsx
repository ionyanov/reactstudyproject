import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {PageLoader} from './PageLoader'

export default {
    title: 'widgets/PageLoader',
    component: PageLoader,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof PageLoader>

const Template: ComponentStory<typeof PageLoader> = (args) => <PageLoader {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
