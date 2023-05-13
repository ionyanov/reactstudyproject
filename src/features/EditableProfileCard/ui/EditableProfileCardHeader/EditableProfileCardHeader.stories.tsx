import { type Meta, type StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/providers/ThemeProvider';
import { profileReducer } from '../../model/slice/profileSlice';
import { EditableProfileCardHeader } from './EditableProfileCardHeader';

const meta: Meta<typeof EditableProfileCardHeader> = {
    title: 'features/ProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    decorators: [
        StoreDecorator(
            { profile: { readOnly: true } },
            { profile: profileReducer },
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};

export const Editable: Story = {
    decorators: [
        StoreDecorator(
            { profile: { readOnly: false } },
            { profile: profileReducer },
        ),
    ],
};
