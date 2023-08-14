import { type Meta, type StoryObj } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/providers/ThemeProvider';
import { AvatarButton } from './AvatarButton';
import AvatarImg from '@/shared/assets/test/avatar.jpg';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';

const meta: Meta<typeof AvatarButton> = {
    title: 'features/AvatarButton',
    component: AvatarButton,
    decorators: [StoreDecorator({ user: { authData: { avatar: AvatarImg } } })],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
