import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Navbar} from './Navbar'

export default {
    title: 'widgets/Navbar',
    component: Navbar,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof Navbar>

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar {...args} />

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({})]

export const LoginedUser = Template.bind({})
LoginedUser.decorators = [StoreDecorator({user: {authData: {}}})]
