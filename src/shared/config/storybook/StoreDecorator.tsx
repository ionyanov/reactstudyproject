import {type StateShema, StoreProvider} from 'app/providers/StoreProvider'
import {type Story} from '@storybook/react'
import {type DeepPartial} from '@reduxjs/toolkit'

export const StoreDecorator: (initialState: DeepPartial<StateShema>) => (StoryComponent: Story) => JSX.Element =
    (initialState: StateShema) => {
        return function f (StoryComponent: Story) {
            return (
                <StoreProvider initialState={initialState}>
                    <StoryComponent/>
                </StoreProvider>
            )
        }
    }
