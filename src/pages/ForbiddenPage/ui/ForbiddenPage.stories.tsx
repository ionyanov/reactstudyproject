import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import ForbiddenPage from './ForbiddenPage'

export default {
    title: 'pages/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof ForbiddenPage>

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
