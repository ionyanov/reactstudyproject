import {type ComponentMeta, type ComponentStory} from '@storybook/react'
import React, {type ReactNode} from 'react'

import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {ListBox} from './ListBox'

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    decorators: [(Story): ReactNode => <div style={{padding: 200}}><Story/></div>],
    args: {
        items: [
            {value: 'item1', content: 'item1item1item1item1item1item1item1', unavailable: false},
            {value: 'item2', content: 'item2', unavailable: false},
            {value: 'item3', content: 'item3', unavailable: true},
            {value: 'item4', content: 'item4', unavailable: false}
        ],
        onChange: (val: string) => {
            console.log(val)
        },
        value: 'item2',
        defaultValue: 'Select item'

    }
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args} />

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
