import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {CurrencySelect} from './CurrencySelect'

export default {
    title: 'entities/Currency',
    component: CurrencySelect,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        title: 'Валюта'
    }
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = (args) => <CurrencySelect {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
