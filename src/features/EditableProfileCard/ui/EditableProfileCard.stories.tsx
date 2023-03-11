import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {EditableProfileCard} from './EditableProfileCard'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import AvatarImg from 'shared/assets/test/avatar.jpg'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {type Profile, ValidateProfileError} from 'entities/Profile'
import {profileReducer} from 'features/EditableProfileCard'

export default {
    title: 'features/ProfileCard/EditableProfileCard',
    component: EditableProfileCard,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />

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

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({
    profile: {
        form
    }
}, {profile: profileReducer})]

export const Loading = Template.bind({})
Loading.decorators = [StoreDecorator({
    profile: {
        form,
        isLoading: true
    }
}, {profile: profileReducer})]

export const WithValidateError = Template.bind({})
WithValidateError.decorators = [StoreDecorator({
    profile: {
        form,
        validateError: [ValidateProfileError.INCORRECT_USER_DATA]
    }
}, {profile: profileReducer})]

export const ReadOnly = Template.bind({})
ReadOnly.decorators = [StoreDecorator({profile: {form, readOnly: true}}, {profile: profileReducer})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({profile: {form}}, {profile: profileReducer})]
