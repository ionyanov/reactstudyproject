import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Button, ButtonSize, ButtonTheme} from './Button';
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Theme} from "app/providers/ThemeProvider";

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    args: {
        children: 'Button'
    }
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

export const Clear = Template.bind({});
Clear.args = {theme: ButtonTheme.CLEAR}

export const Outline = Template.bind({});
Outline.args = {theme: ButtonTheme.OUTLINE}

export const OutlineL = Template.bind({});
OutlineL.args = {theme: ButtonTheme.OUTLINE, size: ButtonSize.L}

export const OutlineXL = Template.bind({});
OutlineXL.args = {theme: ButtonTheme.OUTLINE, size: ButtonSize.XL}

export const OutlineDark = Template.bind({});
OutlineDark.args = {theme: ButtonTheme.OUTLINE}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({});
Background.args = {theme: ButtonTheme.BACKGROUND}

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {theme: ButtonTheme.BACKGROUND_INVERTED}

export const Square_M = Template.bind({});
Square_M.args = {square: true, children: ">", size: ButtonSize.M}

export const Square_L = Template.bind({});
Square_L.args = {square: true, children: ">", size: ButtonSize.L}

export const Square_XL = Template.bind({});
Square_XL.args = {square: true, children: ">", size: ButtonSize.XL}
