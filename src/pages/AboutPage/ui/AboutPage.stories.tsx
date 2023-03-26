import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import AboutPage from './AboutPage'

export default {
    title: 'pages/AboutPage',
    component: AboutPage,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = (args) => <AboutPage {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
