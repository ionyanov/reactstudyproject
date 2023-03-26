import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {PageError} from './PageError'

export default {
    title: 'widgets/PageError',
    component: PageError,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = (args) => <PageError {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
