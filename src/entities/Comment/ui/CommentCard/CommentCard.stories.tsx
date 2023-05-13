import { type Meta, type StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/providers/ThemeProvider';
import { CommentCard } from './CommentCard';

const meta: Meta<typeof CommentCard> = {
    title: 'entities/Comment/CommentCard',
    component: CommentCard,
    args: {
        data: {
            id: '1',
            text: 'Test',
            user: { id: '1', username: 'username' },
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Loading: Story = {
    args: { isLoading: true },
};

export const Empty: Story = {
    args: { data: undefined },
};
