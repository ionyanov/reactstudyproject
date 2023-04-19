import {type Meta, type StoryObj} from '@storybook/react'
import React from 'react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {AppLink, AppLinkTheme} from './AppLink'

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        children: 'AppLink',
        to: '/'
    }
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {theme: AppLinkTheme.PRIMARY}
}

export const PrimaryDark: Story = {
    args: {theme: AppLinkTheme.PRIMARY},
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Secondary: Story = {
    args: {theme: AppLinkTheme.SECONDARY}
}

export const SecondaryDark: Story = {
    args: {theme: AppLinkTheme.SECONDARY},
    decorators: [ThemeDecorator(Theme.DARK)]
}
