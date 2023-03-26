import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import MainPage from './MainPage'

export default {
    title: 'pages/MainPage',
    component: MainPage,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = (args) => <MainPage {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
