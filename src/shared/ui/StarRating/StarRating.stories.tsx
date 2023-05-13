import { type Meta, type StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/providers/ThemeProvider';
import { StarRating } from './StarRating';

const meta: Meta<typeof StarRating> = {
    title: 'shared/StarRating',
    component: StarRating,
    decorators: [StoreDecorator({})],
    args: { selectedStars: 3 },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalWithoutRate: Story = {
    args: { selectedStars: undefined },
};

export const DarkWithoutRate: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { selectedStars: undefined },
};
