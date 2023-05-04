import {type Meta, type StoryObj} from '@storybook/react'

import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import AvatarImg from 'shared/assets/test/avatar.jpg'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {ProfileCard} from './ProfileCard'

const meta: Meta<typeof ProfileCard> = {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    args: {
        data: {
            firstname: 'firstname',
            lastname: 'lastname',
            age: 20,
            country: Country.GB,
            city: 'city',
            currency: Currency.EUR,
            avatar: AvatarImg,
            username: 'username'
        }
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Loading: Story = {
    args: {isLoading: true}
}

export const WithError: Story = {
    args: {error: 'error'}
}
