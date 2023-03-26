import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {ThemeSwitcher} from './ThemeSwitcher'

export default {
    title: 'widgets/ThemeSwitcher',
    component: ThemeSwitcher
} as ComponentMeta<typeof ThemeSwitcher>

const Template: ComponentStory<typeof ThemeSwitcher> = (args) => <ThemeSwitcher {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
