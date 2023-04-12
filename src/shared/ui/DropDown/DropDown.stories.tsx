import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {DropDown} from './DropDown'

export default {
    title: 'shared/DropDown',
    component: DropDown,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    decorators: [(Story) => <div style={{padding: 200}}><Story/></div>],
    args: {
        items: [
            {content: 'item1item1item1item1item1item1item1', unavailable: false},
            {content: 'item2', unavailable: false, href: 'sdfsdds'},
            {content: 'item3', unavailable: true},
            {content: 'item4', unavailable: false}
        ],
        trigger: 'DropDown'
    }
} as ComponentMeta<typeof DropDown>

const Template: ComponentStory<typeof DropDown> = (args) => <DropDown {...args} />

export const Normal = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const TopLeft = Template.bind({})
TopLeft.args = {direction: 'top left'}

export const TopRight = Template.bind({})
TopRight.args = {direction: 'top right'}

export const BottomLeft = Template.bind({})
BottomLeft.args = {direction: 'bottom left'}

export const BottomRight = Template.bind({})
BottomRight.args = {direction: 'bottom right'}
