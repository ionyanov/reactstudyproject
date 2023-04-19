import {type Meta, type StoryObj} from '@storybook/react'
import React from 'react'
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator'
import {Theme} from 'shared/lib/providers/ThemeProvider'
import {Flex} from './Flex'

const meta: Meta<typeof Flex> = {
    title: 'shared/Flex',
    component: Flex,
    args: {
        children: (
            <>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
                <div>Test</div>
            </>
        )
    }
}
export default meta
type Story = StoryObj<typeof meta>

export const Normal: Story = {}

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)]
}

export const Row4: Story = {args: {gap: '4'}}
export const Row8: Story = {args: {gap: '8'}}
export const Row16: Story = {args: {gap: '16'}}
export const Row32: Story = {args: {gap: '32'}}

export const Column4: Story = {args: {direction: 'column', gap: '4'}}
export const Column8: Story = {args: {direction: 'column', gap: '8'}}
export const Column16: Story = {args: {direction: 'column', gap: '16'}}
export const Column32: Story = {args: {direction: 'column', gap: '32'}}
