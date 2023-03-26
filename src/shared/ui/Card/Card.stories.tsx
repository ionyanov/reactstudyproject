import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Card} from './Card'

export default {
    title: 'pages/Card',
    component: Card,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        children: <div>Test</div>
    }
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
