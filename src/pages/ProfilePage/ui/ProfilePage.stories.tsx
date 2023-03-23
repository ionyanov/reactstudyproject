import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import ProfilePage from './ProfilePage'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {profileReducer} from 'features/EditableProfileCard'

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({profile: {isLoading: false, form: {id: 'id'}}}, {profile: profileReducer})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({profile: {isLoading: false, form: {id: 'id'}}}, {profile: profileReducer})]
