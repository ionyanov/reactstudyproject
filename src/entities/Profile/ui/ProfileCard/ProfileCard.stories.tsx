import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {ProfileCard} from './ProfileCard'
import {Country} from 'entities/Country'
import {Currency} from 'entities/Currency'
import AvatarImg from 'shared/assets/test/avatar.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
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
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />

export const Light = Template.bind({})

export const Loading = Template.bind({})
Loading.args = {isLoading: true}

export const WithError = Template.bind({})
WithError.args = {error: 'error'}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
