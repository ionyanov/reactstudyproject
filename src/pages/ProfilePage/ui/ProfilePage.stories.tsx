import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {profileReducer} from 'features/EditableProfileCard'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import ProfilePage from './ProfilePage'

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
