import { type Meta, type StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/providers/ThemeProvider';
import { Button, ButtonSize, ButtonTheme } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Button',
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Clear: Story = {
    args: { theme: ButtonTheme.CLEAR },
};

export const ClearInverted: Story = {
    args: { theme: ButtonTheme.CLEAR_INVERTED },
};

export const OutlineM: Story = {
    args: { theme: ButtonTheme.OUTLINE, size: ButtonSize.M },
};

export const OutlineL: Story = {
    args: { theme: ButtonTheme.OUTLINE, size: ButtonSize.L },
};

export const OutlineXL: Story = {
    args: { theme: ButtonTheme.OUTLINE, size: ButtonSize.XL },
};

export const Background: Story = {
    args: { theme: ButtonTheme.BACKGROUND },
};

export const BackgroundInverted: Story = {
    args: { theme: ButtonTheme.BACKGROUND_INVERTED },
};

export const SquareM: Story = {
    args: { square: true, children: '>', size: ButtonSize.M },
};

export const SquareL: Story = {
    args: { square: true, children: '>', size: ButtonSize.L },
};

export const SquareXL: Story = {
    args: { square: true, children: '>', size: ButtonSize.XL },
};

export const Disabled: Story = {
    args: { disabled: true },
};
