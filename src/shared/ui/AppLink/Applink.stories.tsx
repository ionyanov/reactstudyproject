import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {AppLink, AppLinkTheme} from './AppLink'

export default {
    title: 'shared/AppLink',
    component: AppLink,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        children: 'AppLink',
        to: '/'
    }
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = (args) => <AppLink {...args} />

export const Primary = Template.bind({})
Primary.args = {theme: AppLinkTheme.PRIMARY}

export const PrimaryDark = Template.bind({})
PrimaryDark.args = {theme: AppLinkTheme.PRIMARY}
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({})
Secondary.args = {theme: AppLinkTheme.SECONDARY}

export const SecondaryDark = Template.bind({})
SecondaryDark.args = {theme: AppLinkTheme.SECONDARY}
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
