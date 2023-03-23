import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Skeleton} from './Skeleton'

export default {
    title: 'shared/Skeleton',
    component: Skeleton,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        height: 100,
        width: 100,
        border: '5px'
    }
} as ComponentMeta<typeof Skeleton>

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />

export const Normal = Template.bind({})

export const Circle = Template.bind({})
Circle.args = {...Circle.args, border: '50%'}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const CircleDark = Template.bind({})
CircleDark.decorators = [ThemeDecorator(Theme.DARK)]
CircleDark.args = {...CircleDark.args, border: '50%'}
