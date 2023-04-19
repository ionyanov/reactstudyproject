import {type Meta, type StoryObj} from '@storybook/react'
import AvatarImg from 'shared/assets/test/avatar.jpg'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Avatar} from './Avatar'

const meta: Meta<typeof Avatar> = {
    title: 'shared/Avatar',
    component: Avatar,
    args: {
        text: 'Text',
        src: AvatarImg,
        size: 150
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}
