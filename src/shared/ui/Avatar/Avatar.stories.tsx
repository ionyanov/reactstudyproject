import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import AvatarImg from 'shared/assets/test/avatar.jpg'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Avatar} from './Avatar'

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        text: 'Text',
        src: AvatarImg,
        size: 150
    }
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
