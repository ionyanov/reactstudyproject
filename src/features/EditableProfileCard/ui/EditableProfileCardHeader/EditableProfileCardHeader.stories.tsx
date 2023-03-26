import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {StoreDecorator} from '../../../../shared/config/storybook/StoreDecorator'
import {profileReducer} from '../../model/slice/profileSlice'
import {EditableProfileCardHeader} from './EditableProfileCardHeader'

export default {
    title: 'features/ProfileCard/EditableProfileCardHeader',
    component: EditableProfileCardHeader,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof EditableProfileCardHeader>

const Template: ComponentStory<typeof EditableProfileCardHeader> = (args) => <EditableProfileCardHeader {...args} />

export const Normal = Template.bind({})
Normal.decorators = [StoreDecorator({profile: {readOnly: true}}, {profile: profileReducer})]

export const Editable = Template.bind({})
Editable.decorators = [StoreDecorator({profile: {readOnly: false}}, {profile: profileReducer})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({profile: {readOnly: true}}, {profile: profileReducer})]
