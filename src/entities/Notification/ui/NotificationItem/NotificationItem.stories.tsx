import { type Meta, type StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/providers/ThemeProvider';
import { NotificationItem } from './NotificationItem';

const meta: Meta<typeof NotificationItem> = {
    title: 'entities/Notification/NotificationItem',
    component: NotificationItem,
    args: {
        item: {
            id: '0',
            title: 'Title',
            description: 'Description',
        },
    },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const NormalWithLink: Story = {
    args: {
        item: {
            id: '0',
            title: 'Title',
            description: 'Description',
            href: 'link',
        },
    },
};

export const DarkWithLink: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        item: {
            id: '0',
            title: 'Title',
            description: 'Description',
            href: 'link',
        },
    },
};
