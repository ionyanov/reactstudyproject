import {type Meta, type StoryObj} from '@storybook/react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {DropDown} from './DropDown'

const meta: Meta<typeof DropDown> = {
    title: 'shared/Popups/DropDown',
    component: DropDown,
    decorators: [(Story): JSX.Element => <div style={{padding: 200}}><Story/></div>],
    args: {
        items: [
            {content: 'item1item1item1item1item1item1item1', unavailable: false},
            {content: 'item2', unavailable: false, href: 'sdfsdds'},
            {content: 'item3', unavailable: true},
            {content: 'item4', unavailable: false}
        ],
        trigger: 'DropDown'
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
