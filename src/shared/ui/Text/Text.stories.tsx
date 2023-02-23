import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {Text, TextTheme} from './Text'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof Text>

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />

export const Primary = Template.bind({})
Primary.args = {
    title: 'Title',
    text: 'Text'
}

export const OnlyTitle = Template.bind({})
OnlyTitle.args = {
    title: 'Title'
}

export const OnlyText = Template.bind({})
OnlyText.args = {
    text: 'Text'
}

export const Dark = Template.bind({})
Dark.args = {
    title: 'Title',
    text: 'Text'
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTitleDark = Template.bind({})
OnlyTitleDark.args = {
    title: 'Title'
}
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)]

export const OnlyTextDark = Template.bind({})
OnlyTextDark.args = {
    text: 'Text'
}
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Error = Template.bind({})
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR
}
export const ErrorDark = Template.bind({})
ErrorDark.args = {
    title: 'Title',
    text: 'Text',
    theme: TextTheme.ERROR
}
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)]
