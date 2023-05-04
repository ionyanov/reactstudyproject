import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {AvatarButton} from './AvatarButton'

export default {
    title: 'features/AvatarButton',
    component: AvatarButton,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof AvatarButton>

const Template: ComponentStory<typeof AvatarButton> = (args) => <AvatarButton {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
