import React from 'react'
import {type ComponentMeta, type ComponentStory} from '@storybook/react'

import {Modal} from './Modal'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'app/providers/ThemeProvider'

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