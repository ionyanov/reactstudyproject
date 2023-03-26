import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Modal} from './Modal'

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    args: {
        children: 'Modal'
    }
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />

export const Primary = Template.bind({})
Primary.args = {isOpen: true}

export const Dark = Template.bind({})
Dark.args = {isOpen: true}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
