import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {CountrySelect} from './CountrySelect'

export default {
    title: 'entities/Country',
    component: CountrySelect,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        title: 'Страна'
    }
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = (args) => <CountrySelect {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
