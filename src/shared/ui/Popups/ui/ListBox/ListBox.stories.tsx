import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {ListBox} from './ListBox'

const meta: Meta<typeof ListBox> = {
    title: 'shared/Popups/ListBox',
    component: ListBox,
    decorators: [(Story): JSX.Element => <div style={{padding: 200}}><Story/></div>],
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
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const TopLeft: Story = {args: {direction: 'top left'}}

export const TopRight: Story = {args: {direction: 'top right'}}

export const BottomLeft: Story = {args: {direction: 'bottom left'}}

export const BottomRight: Story = {args: {direction: 'bottom right'}}
