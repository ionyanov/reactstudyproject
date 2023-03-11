import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'
import {SidebarItem} from './SidebarItem'
import MainIcon from 'shared/assets/icons/main-page.svg'
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator'

export default {
    title: 'widgets/SidebarItem',
    component: SidebarItem,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        item: {path: '', text: 'Text', Icon: MainIcon}
    }
} as ComponentMeta<typeof SidebarItem>

const Template: ComponentStory<typeof SidebarItem> = (args) => <SidebarItem {...args} />

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({})]
