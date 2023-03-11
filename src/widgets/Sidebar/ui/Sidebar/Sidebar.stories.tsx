import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {Sidebar} from './Sidebar'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({})]

export const IsAuth = Template.bind({})
IsAuth.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({user: {authData: {}}})]
