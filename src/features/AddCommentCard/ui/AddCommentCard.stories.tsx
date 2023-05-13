import { type Meta, type StoryObj } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/shared/lib/providers/ThemeProvider';
import { addArticleCommentReducer } from '../model/slice/addCommentCardSlice';
import AddCommentCard from './AddCommentCard';

const meta: Meta<typeof AddCommentCard> = {
    title: 'features/Comment/AddCommentCard',
    component: AddCommentCard,
    decorators: [
        StoreDecorator(
            { addArticleComment: { text: 'test' } },
            { addArticleComment: addArticleCommentReducer },
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
};
