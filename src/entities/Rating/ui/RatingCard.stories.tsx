import { type Meta, type StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/providers/ThemeProvider';
import { RatingCard } from './RatingCard';

const meta: Meta<typeof RatingCard> = {
    title: 'entities/RatingCard',
    component: RatingCard,
    decorators: [StoreDecorator({})],
    args: { rate: 3, title: 'Title' },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalWithoutRate: Story = {
    args: { rate: undefined, title: 'Title' },
};

export const DarkWithoutRate: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { rate: undefined, title: 'Title' },
};

export const NormalWithFeedback: Story = {
    args: {
        rate: undefined,
        title: 'Title',
        hasFeedback: true,
        feedbackTitle: 'Fedback Title',
    },
};

export const DarkWithFeedback: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        rate: undefined,
        title: 'Title',
        hasFeedback: true,
        feedbackTitle: 'Fedback Title',
    },
};
