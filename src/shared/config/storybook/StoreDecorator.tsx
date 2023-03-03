import {type StateSchema, StoreProvider} from 'app/providers/StoreProvider'
import {type Story} from '@storybook/react'
import {type ReducersMapObject} from '@reduxjs/toolkit'
import {loginReducer} from 'features/AuthByUserName'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer
}

export function StoreDecorator (initialState: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>): (StoryComponent: Story) => JSX.Element {
    return function f (StoryComponent: Story) {
        return (
            <StoreProvider initialState={initialState} asyncRedusers={{...defaultAsyncReducers, ...asyncReducers}}>
                <StoryComponent/>
            </StoreProvider>
        )
    }
}
