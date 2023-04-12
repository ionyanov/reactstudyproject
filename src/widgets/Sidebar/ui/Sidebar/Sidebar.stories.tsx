import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Sidebar} from './Sidebar'

export default {
    title: 'widgets/Sidebar/Sidebar',
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
