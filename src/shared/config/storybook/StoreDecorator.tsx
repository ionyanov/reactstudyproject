import {type StateShema, StoreProvider} from 'app/providers/StoreProvider'
import {type Story} from '@storybook/react'
import {type ReducersMapObject} from '@reduxjs/toolkit'
import {loginReducer} from 'features/AuthByUserName'

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateShema>> = {
    loginForm: loginReducer
}

export function StoreDecorator (initialState: DeepPartial<StateShema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateShema>>): (StoryComponent: Story) => JSX.Element {
    return function f (StoryComponent: Story) {
        return (
            <StoreProvider initialState={initialState} asyncRedusers={{...defaultAsyncReducers, ...asyncReducers}}>
                <StoryComponent/>
            </StoreProvider>
        )
    }
}
