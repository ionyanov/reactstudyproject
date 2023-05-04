import {type Meta, type StoryObj} from '@storybook/react'
import {Country} from '@/entities/Country'
import {Currency} from '@/entities/Currency'
import {type Profile, ValidateProfileError} from '@/entities/Profile'
import AvatarImg from '@/shared/assets/test/avatar.jpg'
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator'
import {Theme} from '@/shared/lib/providers/ThemeProvider'
import {profileReducer} from '../../model/slice/profileSlice'
import {EditableProfileCard} from './EditableProfileCard'

const form: Profile = {
    firstname: 'firstname',
    lastname: 'lastname',
    age: 20,
    country: Country.GB,
    city: 'city',
    currency: Currency.EUR,
    avatar: AvatarImg,
    username: 'username'
}

const meta: Meta<typeof EditableProfileCard> = {
    title: 'features/ProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    decorators: [StoreDecorator({profile: {form}}, {profile: profileReducer})]
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Loading: Story = {
    decorators: [StoreDecorator({profile: {form, isLoading: true}}, {profile: profileReducer})]
}

export const WithValidateError: Story = {
    decorators: [StoreDecorator({
        profile: {
            form,
            validateError: [ValidateProfileError.INCORRECT_USER_DATA]
        }
    }, {profile: profileReducer})]
}

export const ReadOnly: Story = {
    decorators: [StoreDecorator({
        profile: {form, readOnly: true}
    }, {profile: profileReducer})]
}
