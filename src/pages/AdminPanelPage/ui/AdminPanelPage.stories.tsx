import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import AdminPanelPage from './AdminPanelPage'

export default {
    title: 'pages/AdminPanelPage',
    component: AdminPanelPage,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof AdminPanelPage>

const Template: ComponentStory<typeof AdminPanelPage> = (args) => <AdminPanelPage {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
