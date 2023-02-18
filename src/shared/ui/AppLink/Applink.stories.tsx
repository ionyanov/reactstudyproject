import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import {AppLink, AppLinkTheme} from './AppLink'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

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

export const Primary = Template.bind({
    theme: AppLinkTheme.PRIMARY
})

export const PrimaryDark = Template.bind({
    theme: AppLinkTheme.PRIMARY
})
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Secondary = Template.bind({
    theme: AppLinkTheme.SECONDARY
})

export const SecondaryDark = Template.bind({
    theme: AppLinkTheme.SECONDARY
})
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)]
