import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {Button, ButtonSize, ButtonTheme} from './Button'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        children: 'Button'
    }
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})

export const Clear = Template.bind({})
Clear.args = {theme: ButtonTheme.CLEAR}

export const ClearInverted = Template.bind({})
ClearInverted.args = {theme: ButtonTheme.CLEAR_INVERTED}

export const OutlineM = Template.bind({})
OutlineM.args = {theme: ButtonTheme.OUTLINE}

export const OutlineL = Template.bind({})
OutlineL.args = {theme: ButtonTheme.OUTLINE, size: ButtonSize.L}

export const OutlineXL = Template.bind({})
OutlineXL.args = {theme: ButtonTheme.OUTLINE, size: ButtonSize.XL}

export const OutlineDark = Template.bind({})
OutlineDark.args = {theme: ButtonTheme.OUTLINE}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {theme: ButtonTheme.BACKGROUND}

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {theme: ButtonTheme.BACKGROUND_INVERTED}

export const SquareM = Template.bind({})
SquareM.args = {square: true, children: '>', size: ButtonSize.M}

export const SquareL = Template.bind({})
SquareL.args = {square: true, children: '>', size: ButtonSize.L}

export const SquareXL = Template.bind({})
SquareXL.args = {square: true, children: '>', size: ButtonSize.XL}

export const Disabled = Template.bind({})
Disabled.args = {disabled: true}
