import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Avatar} from './Avatar'
import AvatarImg from '../../assets/test/avatar.jpg'

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
